import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CitySelect from './CitySelect'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import axios from 'axios'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import DatePicker from 'react-datepicker'
import subDays from "date-fns/subDays";
import "react-datepicker/dist/react-datepicker.css";



const CustomMarker = (props) => {
  return (
    <Marker position={[props.latitude, props.longitude]}>
      <Popup>
        <b>{props.category}</b>
        <br />
        {props.outcome}
      </Popup>
    </Marker>
  )
}

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function App() {
  const [incidents, setIncidents] = useState([]);
  const [center, setCenter] = useState([50.9182575232534, -1.404944127424533]);
  const [startDate, setStartDate] = useState(new Date());
  var dateRangeMax = new Date(parseInt('2021'), parseInt('02'))
  var dateRangeMin = new Date(parseInt('2018'), parseInt('04'))



  useEffect(() => {
    axios.get(`https://data.police.uk/api/crimes-street/all-crime?lat=${center[0]}&lng=${center[1]}&date=${startDate.getFullYear()}-${startDate.getMonth() + 1}`)
      .then((response) => {
        console.log(response.data);
        setIncidents(response.data)
      });

  }, [center, startDate]);

  const handleSelect = (val) => {
    setCenter([val.latitude, val.longitude])
  }

  return (
    <div>

      <AppBar position="static" >
        <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
          <Typography variant="h6" >
            City Planner
         </Typography>

          <CitySelect onSelect={handleSelect} />
          <div>
            <DatePicker
              selected={startDate}
              onChange={startDate => setStartDate(startDate)}
              dateFormat="MM/yyyy"
              // filterDate = {(date) =>{
              //   return dateRangeMin < date < dateRangeMax
              // }}
              maxDate={dateRangeMax}
              minDate={dateRangeMin}
              showMonthYearPicker

            />
          </div>
        </Toolbar>

      </AppBar>



      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>

        <ChangeView center={center} zoom={13} />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup>

          {incidents.map((incident, index) => {
            return (
              <CustomMarker key={index} latitude={incident.location.latitude} longitude={incident.location.longitude} category={incident.category} outcome={incident.outcome_status ? incident.outcome_status.category : "No outcome"} />
            )
          })}
        </MarkerClusterGroup>;

      </MapContainer>

    </div>
  );
}

export default App;
