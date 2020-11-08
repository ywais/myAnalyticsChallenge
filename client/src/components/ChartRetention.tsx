import React, { useEffect, useState } from "react";
import { weeklyRetentionObject } from "models";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Theme, createStyles, withStyles } from '@material-ui/core';
import { KeyboardDatePicker,  MuiPickersUtilsProvider } from "@material-ui/pickers";
import { AnalyticsChartHeader } from "./Styled";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#F4F4F4",
      color: "#939393",
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableFirstCell = withStyles((theme: Theme) =>
  createStyles({
    body: {
      minWidth: 150,
    },
  }),
)(StyledTableCell);

const ChartRetention: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(Date.parse(new Date().toDateString()) - (1000 * 3600 * 24 * 7 * 3.5)));
  const [events, setEvents] = useState<weeklyRetentionObject[]>([]);

  const getData: Function = async (dayZero: number) => {
    const { data } = await axios.get(`http://localhost:3001/events/retention?dayZero=${dayZero}`);
    setEvents(data);
  }

  useEffect(() => {
    getData(Date.parse(selectedDate!.toDateString()));
  }, [selectedDate])

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="chartTile">
      <AnalyticsChartHeader>
        <h1>Retention:</h1>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="retention-date-picker"
            label="Pick retention's first day"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </AnalyticsChartHeader>
      <div className="chartTileLineChart">
        <Table aria-label="retention table">
          <TableHead>
            <TableRow key="headerRow">
              <StyledTableCell key="header -1" align="left">Dates</StyledTableCell>
              {events[0] && events[0].weeklyRetention.map((week, index) => (
                <StyledTableCell key={"header " + index} align="center">Week {index}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.registrationWeek}>
                <StyledTableFirstCell
                  key={"row " + event.registrationWeek + " cell -1"}
                  component="th"
                  scope="row"
                >
                  {event.start} - {event.end}
                </StyledTableFirstCell>
                {event.weeklyRetention.map((week, index) => (
                  <StyledTableCell
                    key={"row " + event.registrationWeek + " cell " + index}
                    align="center"
                  >
                    {week}%
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ChartRetention;
