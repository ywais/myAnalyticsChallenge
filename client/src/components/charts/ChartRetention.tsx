import React, { useEffect, useState } from 'react';
import { weeklyRetentionObject } from 'models';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { AnalyticsChartHeader } from '../Styled';
import DateFnsUtils from '@date-io/date-fns';
import styled from 'styled-components';
import axios from 'axios';

interface MyStyledTableCellProps {
  rowNumber: number;
  columnNumber: number;
  content?: number;
}

export const MyStyledTableCell = styled.td`
  font-size: 14px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: ${(props: MyStyledTableCellProps) => props.rowNumber > 0 ? 400 : 500};
  text-align: ${(props: MyStyledTableCellProps) => props.columnNumber < 0 ? 'left' : 'center'};
  padding: 16px;
  min-width: ${(props: MyStyledTableCellProps) => props.columnNumber < 0 ? '150px' : 0};
  line-height: 1.2;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  color: ${(props: MyStyledTableCellProps) => props.rowNumber > 0 ? 'black' : '#939393'};
  background-color: ${
    (props: MyStyledTableCellProps) => (
      props.rowNumber === 0 || props.columnNumber === 0
      ? '#F4F4F4'
      : props.content && props.content >= 90 
      ? '#5566c3'
      : props.content && props.content >= 75 
      ? '#7b88d1'
      : props.content && props.content >= 50 
      ? '#a1aade'
      : 'white'
    )
  };
`;

const ChartRetention: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(Date.parse(new Date().toDateString()) - (1000 * 3600 * 24 * 7 * 3.1)));
  const [events, setEvents] = useState<weeklyRetentionObject[]>([]);

  const getData: Function = async (dayZero: number) => {
    const { data } = await axios.get(`http://localhost:3001/events/retention?dayZero=${dayZero}`);
    setEvents(data);
  };

  useEffect(() => {
    getData(Date.parse(selectedDate!.toDateString()));
  }, [selectedDate]);

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
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </AnalyticsChartHeader>
      <div className="chartTileLineChart">
        <Table aria-label="retention table">
          <TableHead>
            <TableRow key="headerRow">
              <MyStyledTableCell key="header -1" rowNumber={0} columnNumber={-1}>Dates</MyStyledTableCell>
              {events[0] && events[0].weeklyRetention.map((week, index) => (
                <MyStyledTableCell key={`header ${index}`} rowNumber={0} columnNumber={index}>
                  Week {index}
                </MyStyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.registrationWeek}>
                <MyStyledTableCell 
                  key={`row ${event.registrationWeek + 1} cell -1`}
                  rowNumber={event.registrationWeek + 1}
                  columnNumber={-1}
                >
                  <b>
                    {event.start} - {event.end}
                  </b> <br />
                  {event.newUsers} new users
                </MyStyledTableCell>
                {event.weeklyRetention.map((week, index) => (
                  <MyStyledTableCell
                    key={`row ${event.registrationWeek + 1} cell ${index}`}
                    rowNumber={event.registrationWeek + 1}
                    columnNumber={index}
                    content={week}
                  >
                    {week}%
                  </MyStyledTableCell>
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
