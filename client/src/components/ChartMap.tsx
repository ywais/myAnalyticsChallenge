import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import { AnalyticsChartHeader } from './Styled';
import { Event } from 'models';
import axios from 'axios';

const apiKey = 'AIzaSyBUp2zpR6-VRMygUTRgvrmUIXBovRfTVGw';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const typeStyle = [
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
];

const ChartMap: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const getData = async () => {
    const { data } = await axios.get('http://localhost:3001/events/all');
    setEvents(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='chartTile'>
      <AnalyticsChartHeader>
        <h1> Events locations:</h1>
      </AnalyticsChartHeader>
      <div className='chartTileMap'>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={1}
            options={{
              styles: typeStyle,
              mapTypeControl: false,
              streetViewControl: false,
            }}
            center={{ lat: 35, lng: 0 }}
          >
            <MarkerClusterer>
              {(clusterer) => events.map((event: Event) => (
                <Marker
                  key={event._id}
                  position={event.geolocation.location}
                  clusterer={clusterer}
                />
              ))}
            </MarkerClusterer>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ChartMap;
