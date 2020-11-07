import React, { useEffect, useState } from "react";
import { weeklyRetentionObject } from "models";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Theme, createStyles, makeStyles, withStyles } from '@material-ui/core';
import { KeyboardDatePicker,  MuiPickersUtilsProvider } from "@material-ui/pickers";
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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ChartRetention: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(Date.parse(new Date().toDateString()) - (1000 * 3600 * 24 * 7)));
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

  const classes = useStyles();

  return (
    <div className="chartTile">
      <div className="chartTileHeader">
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
      </div>
      <div className="chartTileLineChart">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Dates</StyledTableCell>
              {events[0] && events[0].weeklyRetention.map((week, index) => (
                <StyledTableCell align="center">Week {index}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.registrationWeek}>
                <StyledTableCell component="th" scope="row">{event.end} - {event.start}</StyledTableCell>
                {event.weeklyRetention.map((week) => (
                  <StyledTableCell align="center">{week}%</StyledTableCell>
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
