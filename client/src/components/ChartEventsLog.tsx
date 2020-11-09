import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserEdit, faUserCog, faUserTag, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Event } from 'models';
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography} from '@material-ui/core';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core';

import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { AnalyticsChartHeader } from './Styled';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
    paddingLeft: '10px',
  },
  span: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    paddingLeft: '10px',
  },
}));

const ChartEventsLog: React.FC = () => {
  const [events, setEvents] = useState<JSX.Element[]>([]);
  const [more, setMore] = useState<boolean>(false);
  const [search, setSearch] = React.useState<string>('');
  const [sort, setSort] = React.useState<string>('');
  const [type, setType] = React.useState<string>('');
  const [browser, setBrowser] = React.useState<string>('');

  const displayObject = (objectToDisplay: Event): JSX.Element[] => Object.keys(objectToDisplay).map((key: string): JSX.Element => {
    if (key === 'geolocation') {
      return (
        <div key={key}>
          <Typography className={classes.span}>
            <b>{key}: </b> 
            {JSON.stringify(objectToDisplay[key]).replaceAll('"','').replaceAll(':',': ')}
          </Typography>
        </div>
      );
    } if (key === 'date') {
      return (
        <div key={key}>
          <Typography className={classes.span}>
            <b>{key}: </b> 
            {new Date(objectToDisplay[key]).toDateString()}
          </Typography>
        </div>
      );
    }
    return (
      <div key={key}>
        <Typography className={classes.span}>
          <b>{key}: </b> 
          {objectToDisplay[key]}
        </Typography>
      </div>
    );
  });

  const getData: Function = async (offset: number) => {
    const { data } = await axios.get(`http://localhost:3001/events/all-filtered?type=${type}&browser=${browser}&search=${search}&sorting=${sort}&offset=${offset}`);
    setMore(data.more);
    setEvents((): JSX.Element[] => data.events.map((event: Event, index: number) => (
        <div key={'event ' + index} className='eventInLog'>
          <Accordion>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <FontAwesomeIcon
                icon={
                  event.name === 'signup' ? faUserPlus
                  : event.name === 'login' ? faUserEdit
                  : event.name === 'admin' ? faUserCog
                  : faUserTag
                }
                size='2x'
                style={{
                  color:
                  event.name === 'signup' ? '#3f51b5' :
                    event.name === 'login' ? '#00C853' :
                      event.name === 'admin' ? '#757575' :
                        '#fff',
                }}
              />
              <Typography className={classes.heading}> 
                {event.name} event from {new Date(event.date).toDateString()}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img
                src={`https://avatars.dicebear.com/api/human/${event.distinct_user_id}.svg?r=50`}
                alt="user's avatar"
                width='50'
                className='eventInLog'
              />
              <div>
                {displayObject(event)}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ),
    ));
  };

  useEffect(() => {
    getData(10);
  }, [type, browser, search, sort]);

  const classes = useStyles();

  return (
    <div className='chartTile'>
      <AnalyticsChartHeader>
        <h1>Events log:</h1>
        <form className={classes.root} noValidate autoComplete='off'>
          <TextField
            id='search-input'
            label='Search'
            style={{ maxWidth: '120px' }}
            onChange={(event) => setSearch(event.target.value as string)}
          />
          <FormControl className={classes.formControl}>
            <InputLabel shrink id='sort-input-label'>
              Sort
            </InputLabel>
            <Select
              labelId='sort-input-label'
              id='sort-input'
              value={sort}
              onChange={(event) => setSort(event.target.value as string)}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value=''>None</MenuItem>
              <MenuItem value='+date'>Ascending</MenuItem>
              <MenuItem value='-date'>Descending</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel shrink id='type-input-label'>
              Type
            </InputLabel>
            <Select
              labelId='type-input-label'
              id='type-input'
              value={type}
              onChange={(event) => setType(event.target.value as string)}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value=''>All</MenuItem>
              <MenuItem value='login'>Login</MenuItem>
              <MenuItem value='signup'>Signup</MenuItem>
              <MenuItem value='admin'>Admin</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id='browser-input-label'>
              Browser
            </InputLabel>
            <Select
              labelId='browser-input-label'
              id='browser-input'
              value={browser}
              onChange={(event) => setBrowser(event.target.value as string)}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value=''>All</MenuItem>
              <MenuItem value='chrome'>Chrome</MenuItem>
              <MenuItem value='safari'>Safari</MenuItem>
              <MenuItem value='edge'>Edge</MenuItem>
              <MenuItem value='firefox'>Firefox</MenuItem>
              <MenuItem value='ie'>IE</MenuItem>
              <MenuItem value='other'>Other</MenuItem>
            </Select>
          </FormControl>
        </form>
      </AnalyticsChartHeader>
      <div className='chartTileLineChart'>
        <InfiniteScroll
          dataLength={events.length}
          next={() => getData(events.length + 10)}
          hasMore={more}
          height={250}
          loader={<h4>Loading...</h4>}
          endMessage={(
            <p style={{ textAlign: 'center' }}>
              <b>
                {events.length > 0 ? 'Last result' : 'No results'}
              </b>
            </p>
          )}
        >
          {events}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ChartEventsLog;
