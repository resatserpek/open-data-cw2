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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'


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

function App() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios.get('https://data.police.uk/api/crimes-street/all-crime?lat=50.9182575232534&lng=-1.404944127424533&date=2021-03')
      .then((response) => {
        console.log(response.data);
        setIncidents(response.data)
      });

  }, []);


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            City Planner
         </Typography>

          <CitySelect />

        </Toolbar>
      </AppBar>

      <MapContainer center={[50.9182575232534, -1.404944127424533]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {incidents.map((incident, index) => {
          return (
            <CustomMarker key={index} latitude={incident.location.latitude} longitude={incident.location.longitude} category={incident.category} outcome= {incident.outcome_status ? incident.outcome_status.category : "No outcome"} />
          )
        })}
      </MapContainer>

    </div>
  );
}

export default App;
