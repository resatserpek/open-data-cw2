import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CitySelect, { countries } from "./CitySelect";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import axios from "axios";
import MarkerClusterGroup from "react-leaflet-markercluster";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import "react-datepicker/dist/react-datepicker.css";
import L from "leaflet";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import CanvasJSReact from "./canvasjs.react";
import { Checkbox, Chip, FormControl, Input, ListItemText } from "@material-ui/core";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const CustomMarker = (props) => {
  return (
    <Marker position={[props.latitude, props.longitude]}>
      <Popup>
        <b>{props.category}</b>
        <br />
        {props.outcome}
      </Popup>
    </Marker>
  );
};

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function App() {
  const rentTypes = [{ val: "room", name: "Room" }, { val: "studio", name: "Studio" }, { val: "oneBedroom", name: "One Bedroom" }, { val: "twoBedrooms", name: "Two Bedrooms" },
  { val: "threeBedrooms", name: "Three Bedrooms" }, { val: "fourPlusBedrooms", name: "Four or More Bedrooms" }, { val: "allCategories", name: "All Categories" }];

  var dateRangeMax = new Date(parseInt("2021"), parseInt("02"));
  var dateRangeMin = new Date(parseInt("2018"), parseInt("04"));

  const [incidents, setIncidents] = useState([]);
  const [center, setCenter] = useState([50.9182575232534, -1.404944127424533]);
  const [zoom, setZoom] = useState(13);
  const [cluster, setCluster] = useState(true);
  const [rentType, setRentType] = useState("room");
  const [areaCode, setAreaCode] = useState("E06000045");
  const [cityName, setCityName] = useState("Southampton");
  const [rentPrice, setRentPrice] = useState();
  const [selectedCities, setSelectedCities] = useState([
    {
      "latitude": center[0],
      "longitude": center[1],
      "areacode": areaCode,
      "name": cityName
    }
  ])

  const [selectedRents, setSelectedRents] = useState([]);


  const [startDate, setStartDate] = useState(
    new Date(parseInt("2021"), parseInt("02"))
  );

  const handleChangeCities = (event) => {
    
    setSelectedCities(event.target.value)
  };

  const options = {
    animationEnabled: true,
    theme: "light2",
    
    axisY: {
      title: "Price"
    },
    data: [{
      type: "boxAndWhisker",
      color: "black",
      upperBoxColor: "#A3A3A3",
      lowerBoxColor: "#494949",
      yValueFormatString: "###.0# £",
      dataPoints: selectedRents
    }]
  }

  const handleType = (event) => {
    console.log(event.target.value);
    setRentType(event.target.value)
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '1%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    pos: {
      marginBottom: 12,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  function MapEventComponent() {
    const map = useMapEvents({
      dragend: (e) => {
        //console.log("mapCenter", e.target.getCenter());

        setCenter([e.target.getCenter().lat, e.target.getCenter().lng]);
        setCluster(false);
        //setZoom(e.target.getZoom())
        //console.log(e.target.getZoom());
      },
    });
    return null;
  }

  useEffect(() => {
    //setIncidents([]);

    axios
      .get(
        `https://data.police.uk/api/crimes-street/all-crime?lat=${center[0]
        }&lng=${center[1]}&date=${startDate.getFullYear()}-${startDate.getMonth() + 1
        }`
      )
      .then((response) => {
        //console.log(response.data);
        setIncidents(response.data);
        setCluster(true);
      });
  }, [center, startDate]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/prices?type=${rentType}&code=${areaCode}`)
      .then((response) => {
        setRentPrice(response.data)

      });
  }, [areaCode, rentType])

  useEffect(() => {
    setIncidents([]);
  }, [center]);

  useEffect(() => {
    setSelectedRents([])
    selectedCities.forEach((value, index) => {
      console.log(value)
      axios.get(`http://127.0.0.1:5000/api/prices?type=${rentType}&code=${value.areacode}`)
        .then((response) => {
          setSelectedRents(selectedRents => [...selectedRents, {label: value.name, y: [parseInt(response.data["Lower quartile"]), parseInt(response.data["Lower quartile"]), parseInt(response.data["Upper quartile"]), parseInt(response.data["Upper quartile"]), parseInt(response.data["Median"])]}])
        });
      })
    console.log(selectedRents)
    console.log(selectedCities)
  }, [selectedCities, rentType])

  const handleSelect = (val) => {
    console.log(val);
    if (val) {
      setCenter([val.latitude, val.longitude]);
      setAreaCode(val.areacode)
      setCityName(val.name)
      setSelectedCities([val])
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
          <Typography variant="h6">City Planner</Typography>

          <CitySelect onSelect={handleSelect} />
          <div>
            <Typography variant="subtitle1">Select Date</Typography>
            <DatePicker
              selected={startDate}
              onChange={(startDate) => {
                setStartDate(startDate);
                setCluster(false);
              }}
              dateFormat="MM/yyyy"
              maxDate={dateRangeMax}
              minDate={dateRangeMin}
              showMonthYearPicker
            />
          </div>
        </Toolbar>
      </AppBar>

      {cluster ? null : <LinearProgress color="secondary" />}
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2" style={{ textAlign: "center" }}>
                  Crime Rates
                </Typography>
                <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                  <ChangeView center={center} />

                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {cluster ? (
                    <MarkerClusterGroup
                      removeOutsideVisibleBounds={true}
                    >
                      {incidents.map((incident, index) => {
                        return (
                          <CustomMarker
                            key={index}
                            latitude={incident.location.latitude}
                            longitude={incident.location.longitude}
                            category={incident.category}
                            outcome={
                              incident.outcome_status
                                ? incident.outcome_status.category
                                : "No outcome"
                            }
                          />
                        );
                      })}
                    </MarkerClusterGroup>
                  ) : null}

                  <MapEventComponent />
                </MapContainer>

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>


              <CardHeader
                action={
                  <Select
                    value={rentType}
                    onChange={handleType}
                  >
                    <MenuItem value="" disabled>
                      Select Rent Type
                  </MenuItem>
                    {rentTypes.map((type, index) => {
                      return (
                        <MenuItem value={type.val}>{type.name}</MenuItem>
                      )
                    }
                    )
                    }

                  </Select>

                }
                title="Rent Prices (Monthly)"
                subheader={cityName}
              >

              </CardHeader>
              <CardContent>



                <Grid container spacing={3}>
                  {rentPrice && Object.keys(rentPrice).map((keyName, keyIndex) => {
                    // use keyName to get current key's name
                    // and a[keyName] to get its value
                    return (
                      <Grid item xs={6}>
                        <Typography className={classes.pos} color="textSecondary">{keyName} </Typography>
                        <Typography variant="h5" component="h2">{!isNaN(parseInt(rentPrice[keyName])) ? "£" + rentPrice[keyName] : "No Data"} </Typography>
                      </Grid>
                    )

                  })}
                </Grid>
              </CardContent>
              <Divider />
              <CardHeader
                title="Rent Comparison"
                subheader={"Select up to 5 cities to compare"}
              >
              </CardHeader>
              <CardContent>

                  <FormControl className={classes.formControl} style={{width: "100%"}}>
                  <InputLabel id="demo-mutiple-chip-label">Selected Cities</InputLabel>
                  <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={selectedCities}
                    onChange={handleChangeCities}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {selected.map((value,index) => (
                          <Chip key={index} label={value.name} className={classes.chip} />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                    
                  >
                    {countries.map((city, index) => (
                      <MenuItem key={index} value={city}>
                        {city.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
              </CardContent>

            </Card>

          </Grid>
        </Grid>

      </div>
    </div>
  );
}

export default App;
