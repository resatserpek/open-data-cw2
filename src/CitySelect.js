/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
    
  },
});


export default function CitySelect(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState();

  return (
    <Autocomplete
      id="country-select-demo"
      value={selected}
      style={{ width: 300 }}
      options={countries}
      classes={{
        option: classes.option,
      }}
      onChange={(event, val) => {
        props.onSelect(val)
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          {option.name}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
        style={{
          backgroundColor: "white"
      }}
          {...params}
          label="Choose a city"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'off', // disable autocomplete and autofill,
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  {
    "latitude": 50.8356781,
    "longitude": -0.280956,
    "areacode": "E07000223",
    "name": "Adur"
  },
  {
    "latitude": 54.6433983,
    "longitude": -3.549361,
    "areacode": "E07000026",
    "name": "Allerdale"
  },
  {
    "latitude": 53.0133324,
    "longitude": -1.35147,
    "areacode": "E07000032",
    "name": "Amber Valley"
  },
  {
    "latitude": 50.8177109,
    "longitude": -0.568214,
    "areacode": "E07000224",
    "name": "Arun"
  },
  {
    "latitude": 52.2204247,
    "longitude": 1.23501,
    "areacode": "E07000170",
    "name": "Ashfield"
  },
  {
    "latitude": 51.1483536,
    "longitude": 0.875563,
    "areacode": "E07000105",
    "name": "Ashford"
  },
  {
    "latitude": 52.0417557,
    "longitude": 0.728226,
    "areacode": "E07000200",
    "name": "Babergh"
  },
  {
    "latitude": 51.5427551,
    "longitude": 0.165628,
    "areacode": "E09000002",
    "name": "Barking and Dagenham"
  },
  {
    "latitude": 51.6254005,
    "longitude": -0.1527,
    "areacode": "E09000003",
    "name": "Barnet"
  },
  {
    "latitude": 53.5529327,
    "longitude": -1.481272,
    "areacode": "E08000016",
    "name": "Barnsley"
  },
  {
    "latitude": 54.1172066,
    "longitude": -3.2256889,
    "areacode": "E07000027",
    "name": "Barrow-in-Furness"
  },
  {
    "latitude": 51.5721817,
    "longitude": 0.462461,
    "areacode": "E07000066",
    "name": "Basildon"
  },
  {
    "latitude": 51.2624588,
    "longitude": -1.084024,
    "areacode": "E07000084",
    "name": "Basingstoke and Deane"
  },
  {
    "latitude": 53.4000015,
    "longitude": -0.95,
    "areacode": "E07000171",
    "name": "Bassetlaw"
  },
  {
    "latitude": 51.3559647,
    "longitude": -2.475214,
    "areacode": "E06000022",
    "name": "Bath and North East Somerset"
  },
  {
    "latitude": 52.1349983,
    "longitude": -0.47,
    "areacode": "E06000055",
    "name": "Bedford"
  },
  {
    "latitude": 51.4413528,
    "longitude": 0.14861,
    "areacode": "E09000004",
    "name": "Bexley"
  },
  {
    "latitude": 52.4828987,
    "longitude": -1.8934619,
    "areacode": "E08000025",
    "name": "Birmingham"
  },
  {
    "latitude": 52.5759048,
    "longitude": -1.161992,
    "areacode": "E07000129",
    "name": "Blaby"
  },
  {
    "latitude": 53.6926575,
    "longitude": -2.4675801,
    "areacode": "E06000008",
    "name": "Blackburn with Darwen"
  },
  {
    "latitude": 53.8141785,
    "longitude": -3.0535419,
    "areacode": "E06000009",
    "name": "Blackpool"
  },
  {
    "latitude": 53.2285271,
    "longitude": -1.289273,
    "areacode": "E07000033",
    "name": "Bolsover"
  },
  {
    "latitude": 53.5784645,
    "longitude": -2.429841,
    "areacode": "E08000001",
    "name": "Bolton"
  },
  {
    "latitude": 52.9774513,
    "longitude": -0.024069,
    "areacode": "E07000136",
    "name": "Boston"
  },
  {
    "latitude": 50.721425,
    "longitude": -1.8652623,
    "areacode": "E06000058",
    "name": "Bournemouth, Christchurch and Poole"
  },
  {
    "latitude": 51.4081383,
    "longitude": -0.739707,
    "areacode": "E06000036",
    "name": "Bracknell Forest"
  },
  {
    "latitude": 53.7938538,
    "longitude": -1.752442,
    "areacode": "E08000032",
    "name": "Bradford"
  },
  {
    "latitude": 51.8774757,
    "longitude": 0.548444,
    "areacode": "E07000067",
    "name": "Braintree"
  },
  {
    "latitude": 52.4145699,
    "longitude": 0.752958,
    "areacode": "E07000143",
    "name": "Breckland"
  },
  {
    "latitude": 51.5661087,
    "longitude": -0.27389,
    "areacode": "E09000005",
    "name": "Brent"
  },
  {
    "latitude": 51.6214066,
    "longitude": 0.305749,
    "areacode": "E07000068",
    "name": "Brentwood"
  },
  {
    "latitude": 50.8442993,
    "longitude": -0.133874,
    "areacode": "E06000043",
    "name": "Brighton and Hove"
  },
  {
    "latitude": 53.9370346,
    "longitude": -2.5179999,
    "areacode": "E06000023",
    "name": "Bristol, City of"
  },
  {
    "latitude": 52.7964058,
    "longitude": 1.2520601,
    "areacode": "E07000144",
    "name": "Broadland"
  },
  {
    "latitude": 51.4056816,
    "longitude": 0.01435,
    "areacode": "E09000006",
    "name": "Bromley"
  },
  {
    "latitude": 52.3338051,
    "longitude": -2.0635149,
    "areacode": "E07000234",
    "name": "Bromsgrove"
  },
  {
    "latitude": 51.7472153,
    "longitude": -0.022924,
    "areacode": "E07000095",
    "name": "Broxbourne"
  },
  {
    "latitude": 52.9252892,
    "longitude": -1.212893,
    "areacode": "E07000172",
    "name": "Broxtowe"
  },
  {
    "latitude": 51.7853394,
    "longitude": -0.812124,
    "areacode": "E06000060",
    "name": "Buckinghamshire"
  },
  {
    "latitude": 53.7868767,
    "longitude": -2.245322,
    "areacode": "E07000117",
    "name": "Burnley"
  },
  {
    "latitude": 53.5934601,
    "longitude": -2.2985401,
    "areacode": "E08000002",
    "name": "Bury"
  },
  {
    "latitude": 53.7211914,
    "longitude": -1.973405,
    "areacode": "E08000033",
    "name": "Calderdale"
  },
  {
    "latitude": 52.2025452,
    "longitude": 0.131237,
    "areacode": "E07000008",
    "name": "Cambridge"
  },
  {
    "latitude": 52.3405304,
    "longitude": 0.032352,
    "areacode": "E10000003",
    "name": "Cambridgeshire"
  },
  {
    "latitude": 51.5394478,
    "longitude": -0.142445,
    "areacode": "E09000007",
    "name": "Camden"
  },
  {
    "latitude": 52.7459984,
    "longitude": -2.0009999,
    "areacode": "E07000192",
    "name": "Cannock Chase"
  },
  {
    "latitude": 51.277256,
    "longitude": 1.0804549,
    "areacode": "E07000106",
    "name": "Canterbury"
  },
  {
    "latitude": 54.8950615,
    "longitude": -2.933553,
    "areacode": "E07000028",
    "name": "Carlisle"
  },
  {
    "latitude": 51.528852,
    "longitude": 0.0376472,
    "areacode": "E07000069",
    "name": "Castle Point"
  },
  {
    "latitude": 52.0067291,
    "longitude": -0.43598,
    "areacode": "E06000056",
    "name": "Central Bedfordshire"
  },
  {
    "latitude": 52.769001,
    "longitude": -1.204,
    "areacode": "E07000130",
    "name": "Charnwood"
  },
  {
    "latitude": 51.7358475,
    "longitude": 0.469706,
    "areacode": "E07000070",
    "name": "Chelmsford"
  },
  {
    "latitude": 51.8979912,
    "longitude": -2.0713079,
    "areacode": "E07000078",
    "name": "Cheltenham"
  },
  {
    "latitude": 52.0600204,
    "longitude": -1.340449,
    "areacode": "E07000177",
    "name": "Cherwell"
  },
  {
    "latitude": 53.1804237,
    "longitude": -2.3493531,
    "areacode": "E06000049",
    "name": "Cheshire East"
  },
  {
    "latitude": 53.1979637,
    "longitude": -2.733439,
    "areacode": "E06000050",
    "name": "Cheshire West and Chester"
  },
  {
    "latitude": 53.2353592,
    "longitude": -1.4241461,
    "areacode": "E07000034",
    "name": "Chesterfield"
  },
  {
    "latitude": 50.8366394,
    "longitude": -0.780178,
    "areacode": "E07000225",
    "name": "Chichester"
  },
  {
    "latitude": 53.6527443,
    "longitude": -2.632412,
    "areacode": "E07000118",
    "name": "Chorley"
  },
  {
    "latitude": 51.5001526,
    "longitude": -0.126236,
    "areacode": "E09000001",
    "name": "City of London"
  },
  {
    "latitude": 51.8898048,
    "longitude": 0.901235,
    "areacode": "E07000071",
    "name": "Colchester"
  },
  {
    "latitude": 54.5493889,
    "longitude": -3.5874729,
    "areacode": "E07000029",
    "name": "Copeland"
  },
  {
    "latitude": 52.4892006,
    "longitude": -0.679601,
    "areacode": "E07000150",
    "name": "Corby"
  },
  {
    "latitude": 50.2629509,
    "longitude": -5.0507021,
    "areacode": "E06000052",
    "name": "Cornwall"
  },
  {
    "latitude": 52.0404091,
    "longitude": -1.855795,
    "areacode": "E07000079",
    "name": "Cotswold"
  },
  {
    "latitude": 54.6953964,
    "longitude": -1.839774,
    "areacode": "E06000047",
    "name": "County Durham"
  },
  {
    "latitude": 52.4063148,
    "longitude": -1.508517,
    "areacode": "E08000026",
    "name": "Coventry"
  },
  {
    "latitude": 53.9609795,
    "longitude": -2.0119441,
    "areacode": "E07000163",
    "name": "Craven"
  },
  {
    "latitude": 51.1133385,
    "longitude": -0.182914,
    "areacode": "E07000226",
    "name": "Crawley"
  },
  {
    "latitude": 51.3726997,
    "longitude": -0.1099,
    "areacode": "E09000008",
    "name": "Croydon"
  },
  {
    "latitude": 54.8950615,
    "longitude": -2.933553,
    "areacode": "E10000006",
    "name": "Cumbria"
  },
  {
    "latitude": 51.7536659,
    "longitude": -0.474902,
    "areacode": "E07000096",
    "name": "Dacorum"
  },
  {
    "latitude": 54.5287323,
    "longitude": -1.553051,
    "areacode": "E06000005",
    "name": "Darlington"
  },
  {
    "latitude": 51.4439125,
    "longitude": 0.219727,
    "areacode": "E07000107",
    "name": "Dartford"
  },
  {
    "latitude": 52.2583199,
    "longitude": -1.1604331,
    "areacode": "E07000151",
    "name": "Daventry"
  },
  {
    "latitude": 52.9125786,
    "longitude": -1.468354,
    "areacode": "E06000015",
    "name": "Derby"
  },
  {
    "latitude": 53.1422081,
    "longitude": -1.61562,
    "areacode": "E10000007",
    "name": "Derbyshire"
  },
  {
    "latitude": 53.1381721,
    "longitude": -1.554984,
    "areacode": "E07000035",
    "name": "Derbyshire Dales"
  },
  {
    "latitude": 50.7606163,
    "longitude": -3.809989,
    "areacode": "E10000008",
    "name": "Devon"
  },
  {
    "latitude": 53.5230408,
    "longitude": -1.133762,
    "areacode": "E08000017",
    "name": "Doncaster"
  },
  {
    "latitude": 50.8069267,
    "longitude": -2.332969,
    "areacode": "E06000059",
    "name": "Dorset"
  },
  {
    "latitude": 51.1297035,
    "longitude": 1.311137,
    "areacode": "E07000108",
    "name": "Dover"
  },
  {
    "latitude": 52.5086708,
    "longitude": -2.0873351,
    "areacode": "E08000027",
    "name": "Dudley"
  },
  {
    "latitude": 51.5133514,
    "longitude": -0.304214,
    "areacode": "E09000009",
    "name": "Ealing"
  },
  {
    "latitude": 52.399456,
    "longitude": 0.259679,
    "areacode": "E07000009",
    "name": "East Cambridgeshire"
  },
  {
    "latitude": 50.619751,
    "longitude": -3.4134099,
    "areacode": "E07000040",
    "name": "East Devon"
  },
  {
    "latitude": 51.0046272,
    "longitude": -0.93394,
    "areacode": "E07000085",
    "name": "East Hampshire"
  },
  {
    "latitude": 51.7959671,
    "longitude": -0.078882,
    "areacode": "E07000242",
    "name": "East Hertfordshire"
  },
  {
    "latitude": 53.3670807,
    "longitude": -0.007934,
    "areacode": "E07000137",
    "name": "East Lindsey"
  },
  {
    "latitude": 52.4500008,
    "longitude": -0.5,
    "areacode": "E07000152",
    "name": "East Northamptonshire"
  },
  {
    "latitude": 53.9166679,
    "longitude": -0.5,
    "areacode": "E06000011",
    "name": "East Riding of Yorkshire"
  },
  {
    "latitude": 52.8068733,
    "longitude": -1.643034,
    "areacode": "E07000193",
    "name": "East Staffordshire"
  },
  {
    "latitude": 55.9304341,
    "longitude": -3.1682307,
    "areacode": "E07000244",
    "name": "East Suffolk"
  },
  {
    "latitude": 50.9417572,
    "longitude": 0.274891,
    "areacode": "E10000011",
    "name": "East Sussex"
  },
  {
    "latitude": 50.7668686,
    "longitude": 0.284804,
    "areacode": "E07000061",
    "name": "Eastbourne"
  },
  {
    "latitude": 50.9714317,
    "longitude": -1.35078,
    "areacode": "E07000086",
    "name": "Eastleigh"
  },
  {
    "latitude": 54.6667061,
    "longitude": -2.754986,
    "areacode": "E07000030",
    "name": "Eden"
  },
  {
    "latitude": 51.3696175,
    "longitude": -0.365666,
    "areacode": "E07000207",
    "name": "Elmbridge"
  },
  {
    "latitude": 51.6567612,
    "longitude": -0.080147,
    "areacode": "E09000010",
    "name": "Enfield"
  },
  {
    "latitude": 51.6599998,
    "longitude": 0.05,
    "areacode": "E07000072",
    "name": "Epping Forest"
  },
  {
    "latitude": 51.3307304,
    "longitude": -0.270059,
    "areacode": "E07000208",
    "name": "Epsom and Ewell"
  },
  {
    "latitude": 52.9752617,
    "longitude": -1.305421,
    "areacode": "E07000036",
    "name": "Erewash"
  },
  {
    "latitude": 51.8101692,
    "longitude": 0.566582,
    "areacode": "E10000012",
    "name": "Essex"
  },
  {
    "latitude": 50.7218018,
    "longitude": -3.533617,
    "areacode": "E07000041",
    "name": "Exeter"
  },
  {
    "latitude": 50.8514519,
    "longitude": -1.179016,
    "areacode": "E07000087",
    "name": "Fareham"
  },
  {
    "latitude": 52.6662178,
    "longitude": 0.159401,
    "areacode": "E07000010",
    "name": "Fenland"
  },
  {
    "latitude": 51.0788498,
    "longitude": 1.174614,
    "areacode": "E07000112",
    "name": "Folkestone and Hythe"
  },
  {
    "latitude": 51.7969856,
    "longitude": -2.543129,
    "areacode": "E07000080",
    "name": "Forest of Dean"
  },
  {
    "latitude": 53.7630005,
    "longitude": -2.934,
    "areacode": "E07000119",
    "name": "Fylde"
  },
  {
    "latitude": 54.9593735,
    "longitude": -1.601825,
    "areacode": "E08000037",
    "name": "Gateshead"
  },
  {
    "latitude": 53.086235,
    "longitude": -1.168352,
    "areacode": "E07000173",
    "name": "Gedling"
  },
  {
    "latitude": 51.8667412,
    "longitude": -2.2486701,
    "areacode": "E07000081",
    "name": "Gloucester"
  },
  {
    "latitude": 51.8667412,
    "longitude": -2.2486701,
    "areacode": "E10000013",
    "name": "Gloucestershire"
  },
  {
    "latitude": 50.7946625,
    "longitude": -1.12907,
    "areacode": "E07000088",
    "name": "Gosport"
  },
  {
    "latitude": 51.4413948,
    "longitude": 0.368693,
    "areacode": "E07000109",
    "name": "Gravesham"
  },
  {
    "latitude": 52.6076927,
    "longitude": 1.732991,
    "areacode": "E07000145",
    "name": "Great Yarmouth"
  },
  {
    "latitude": 53.5151711,
    "longitude": -2.2842169,
    "areacode": "E11000001",
    "name": "Greater Manchester (Met County)"
  },
  {
    "latitude": 51.4787903,
    "longitude": -0.010677,
    "areacode": "E09000011",
    "name": "Greenwich"
  },
  {
    "latitude": 51.2364197,
    "longitude": -0.570291,
    "areacode": "E07000209",
    "name": "Guildford"
  },
  {
    "latitude": 51.5457878,
    "longitude": -0.055418,
    "areacode": "E09000012",
    "name": "Hackney"
  },
  {
    "latitude": 51.7827339,
    "longitude": -0.734686,
    "areacode": "E06000006",
    "name": "Halton"
  },
  {
    "latitude": 53.87603,
    "longitude": -2.9553549,
    "areacode": "E07000164",
    "name": "Hambleton"
  },
  {
    "latitude": 51.5114594,
    "longitude": -0.23767,
    "areacode": "E09000013",
    "name": "Hammersmith and Fulham"
  },
  {
    "latitude": 51.0661125,
    "longitude": -1.287227,
    "areacode": "E10000014",
    "name": "Hampshire"
  },
  {
    "latitude": 52.4779625,
    "longitude": -0.921035,
    "areacode": "E07000131",
    "name": "Harborough"
  },
  {
    "latitude": 51.5870743,
    "longitude": -0.122186,
    "areacode": "E09000014",
    "name": "Haringey"
  },
  {
    "latitude": 51.7764626,
    "longitude": 0.111317,
    "areacode": "E07000073",
    "name": "Harlow"
  },
  {
    "latitude": 53.9906158,
    "longitude": -1.539112,
    "areacode": "E07000165",
    "name": "Harrogate"
  },
  {
    "latitude": 51.5788078,
    "longitude": -0.33376,
    "areacode": "E09000015",
    "name": "Harrow"
  },
  {
    "latitude": 54.7071342,
    "longitude": -1.2739609,
    "areacode": "E07000089",
    "name": "Hart"
  },
  {
    "latitude": 54.6824913,
    "longitude": -1.216697,
    "areacode": "E06000001",
    "name": "Hartlepool"
  },
  {
    "latitude": 50.8553467,
    "longitude": 0.572475,
    "areacode": "E07000062",
    "name": "Hastings"
  },
  {
    "latitude": 50.8566055,
    "longitude": -0.985593,
    "areacode": "E07000090",
    "name": "Havant"
  },
  {
    "latitude": 51.5741501,
    "longitude": 0.183871,
    "areacode": "E09000016",
    "name": "Havering"
  },
  {
    "latitude": 52.0559921,
    "longitude": -2.7175469,
    "areacode": "E06000019",
    "name": "Herefordshire, County of"
  },
  {
    "latitude": 51.7959671,
    "longitude": -0.078882,
    "areacode": "E10000015",
    "name": "Hertfordshire"
  },
  {
    "latitude": 51.6923141,
    "longitude": -0.178689,
    "areacode": "E07000098",
    "name": "Hertsmere"
  },
  {
    "latitude": 53.2589455,
    "longitude": -1.9130189,
    "areacode": "E07000037",
    "name": "High Peak"
  },
  {
    "latitude": 51.526638,
    "longitude": -0.442372,
    "areacode": "E09000017",
    "name": "Hillingdon"
  },
  {
    "latitude": 53.9370346,
    "longitude": -2.5179999,
    "areacode": "E07000132",
    "name": "Hinckley and Bosworth"
  },
  {
    "latitude": 51.0637512,
    "longitude": -0.327003,
    "areacode": "E07000227",
    "name": "Horsham"
  },
  {
    "latitude": 51.4675865,
    "longitude": -0.361799,
    "areacode": "E09000018",
    "name": "Hounslow"
  },
  {
    "latitude": 52.3292503,
    "longitude": -0.185363,
    "areacode": "E07000011",
    "name": "Huntingdonshire"
  },
  {
    "latitude": 53.7528305,
    "longitude": -2.3642011,
    "areacode": "E07000120",
    "name": "Hyndburn"
  },
  {
    "latitude": 51.5084114,
    "longitude": -0.125364,
    "areacode": "E13000001",
    "name": "Inner London"
  },
  {
    "latitude": 52.0593071,
    "longitude": 1.155672,
    "areacode": "E07000202",
    "name": "Ipswich"
  },
  {
    "latitude": 51.8587279,
    "longitude": -0.52475,
    "areacode": "E06000046",
    "name": "Isle of Wight"
  },
  {
    "latitude": 49.9145966,
    "longitude": -6.315743,
    "areacode": "E06000053",
    "name": "Isles of Scilly"
  },
  {
    "latitude": 51.5348396,
    "longitude": -0.103436,
    "areacode": "E09000019",
    "name": "Islington"
  },
  {
    "latitude": 51.5038567,
    "longitude": -0.192043,
    "areacode": "E09000020",
    "name": "Kensington and Chelsea"
  },
  {
    "latitude": 51.2703362,
    "longitude": 0.523841,
    "areacode": "E10000016",
    "name": "Kent"
  },
  {
    "latitude": 52.3953362,
    "longitude": -0.727849,
    "areacode": "E07000153",
    "name": "Kettering"
  },
  {
    "latitude": 53.7642097,
    "longitude": -0.335193,
    "areacode": "E06000010",
    "name": "Kingston upon Hull, City of"
  },
  {
    "latitude": 51.4123154,
    "longitude": -0.300443,
    "areacode": "E09000021",
    "name": "Kingston upon Thames"
  },
  {
    "latitude": 52.7200241,
    "longitude": 0.476026,
    "areacode": "E07000146",
    "name": "KingÃ¢â‚¬â„¢s Lynn and West Norfolk"
  },
  {
    "latitude": 53.6273842,
    "longitude": -1.763236,
    "areacode": "E08000034",
    "name": "Kirklees"
  },
  {
    "latitude": 53.456749,
    "longitude": -2.8532259,
    "areacode": "E08000011",
    "name": "Knowsley"
  },
  {
    "latitude": 51.4891129,
    "longitude": -0.11067,
    "areacode": "E09000022",
    "name": "Lambeth"
  },
  {
    "latitude": 53.8456039,
    "longitude": -2.6142781,
    "areacode": "E10000017",
    "name": "Lancashire"
  },
  {
    "latitude": 54.0495872,
    "longitude": -2.7984331,
    "areacode": "E07000121",
    "name": "Lancaster"
  },
  {
    "latitude": 53.7996902,
    "longitude": -1.549103,
    "areacode": "E08000035",
    "name": "Leeds"
  },
  {
    "latitude": 52.634861,
    "longitude": -1.12906,
    "areacode": "E06000016",
    "name": "Leicester"
  },
  {
    "latitude": 52.6682396,
    "longitude": -1.003571,
    "areacode": "E10000018",
    "name": "Leicestershire"
  },
  {
    "latitude": 50.8756294,
    "longitude": 0.017858,
    "areacode": "E07000063",
    "name": "Lewes"
  },
  {
    "latitude": 51.4568787,
    "longitude": -0.015964,
    "areacode": "E09000023",
    "name": "Lewisham"
  },
  {
    "latitude": 52.6835556,
    "longitude": -1.822359,
    "areacode": "E07000194",
    "name": "Lichfield"
  },
  {
    "latitude": 53.2348633,
    "longitude": -0.538436,
    "areacode": "E07000138",
    "name": "Lincoln"
  },
  {
    "latitude": 53.2348633,
    "longitude": -0.538436,
    "areacode": "E10000019",
    "name": "Lincolnshire"
  },
  {
    "latitude": 53.410778,
    "longitude": -2.977838,
    "areacode": "E08000012",
    "name": "Liverpool"
  },
  {
    "latitude": 51.8796501,
    "longitude": -0.417558,
    "areacode": "E06000032",
    "name": "Luton"
  },
  {
    "latitude": 51.2703362,
    "longitude": 0.523841,
    "areacode": "E07000110",
    "name": "Maidstone"
  },
  {
    "latitude": 51.7311287,
    "longitude": 0.674489,
    "areacode": "E07000074",
    "name": "Maldon"
  },
  {
    "latitude": 52.0830002,
    "longitude": -2.3499999,
    "areacode": "E07000235",
    "name": "Malvern Hills"
  },
  {
    "latitude": 53.4807129,
    "longitude": -2.234376,
    "areacode": "E08000003",
    "name": "Manchester"
  },
  {
    "latitude": 53.1438675,
    "longitude": -1.199111,
    "areacode": "E07000174",
    "name": "Mansfield"
  },
  {
    "latitude": 51.4249191,
    "longitude": 0.566666,
    "areacode": "E06000035",
    "name": "Medway"
  },
  {
    "latitude": 52.1070023,
    "longitude": 1.3325861,
    "areacode": "E07000133",
    "name": "Melton"
  },
  {
    "latitude": 51.2835617,
    "longitude": -2.7103381,
    "areacode": "E07000187",
    "name": "Mendip"
  },
  {
    "latitude": 53.3870735,
    "longitude": -3.022126,
    "areacode": "E11000002",
    "name": "Merseyside (Met County)"
  },
  {
    "latitude": 50.8895912,
    "longitude": -4.0957832,
    "areacode": "E09000024",
    "name": "Merton"
  },
  {
    "latitude": 50.9000931,
    "longitude": -3.490489,
    "areacode": "E07000042",
    "name": "Mid Devon"
  },
  {
    "latitude": 52.188427,
    "longitude": 0.993414,
    "areacode": "E07000203",
    "name": "Mid Suffolk"
  },
  {
    "latitude": 51.1288986,
    "longitude": -0.01576,
    "areacode": "E07000228",
    "name": "Mid Sussex"
  },
  {
    "latitude": 54.5730057,
    "longitude": -1.237911,
    "areacode": "E06000002",
    "name": "Middlesbrough"
  },
  {
    "latitude": 52.0414391,
    "longitude": -0.760557,
    "areacode": "E06000042",
    "name": "Milton Keynes"
  },
  {
    "latitude": 51.3054868,
    "longitude": -0.3104704,
    "areacode": "E07000210",
    "name": "Mole Valley"
  },
  {
    "latitude": 51.607776,
    "longitude": 0.068923,
    "areacode": "E07000091",
    "name": "New Forest"
  },
  {
    "latitude": 53.074646,
    "longitude": -0.809788,
    "areacode": "E07000175",
    "name": "Newark and Sherwood"
  },
  {
    "latitude": 54.9778404,
    "longitude": -1.612916,
    "areacode": "E08000021",
    "name": "Newcastle upon Tyne"
  },
  {
    "latitude": 53.0111771,
    "longitude": -2.229845,
    "areacode": "E07000195",
    "name": "Newcastle-under-Lyme"
  },
  {
    "latitude": 51.5409775,
    "longitude": -0.001641,
    "areacode": "E09000025",
    "name": "Newham"
  },
  {
    "latitude": 52.6281013,
    "longitude": 1.299349,
    "areacode": "E10000020",
    "name": "Norfolk"
  },
  {
    "latitude": 51.4823435,
    "longitude": -2.5329743,
    "areacode": "E07000043",
    "name": "North Devon"
  },
  {
    "latitude": 53.1666298,
    "longitude": -1.4158601,
    "areacode": "E07000038",
    "name": "North East Derbyshire"
  },
  {
    "latitude": 53.5426559,
    "longitude": -0.138432,
    "areacode": "E06000012",
    "name": "North East Lincolnshire"
  },
  {
    "latitude": 51.7959671,
    "longitude": -0.078882,
    "areacode": "E07000099",
    "name": "North Hertfordshire"
  },
  {
    "latitude": 53.1884513,
    "longitude": -0.5986711,
    "areacode": "E07000139",
    "name": "North Kesteven"
  },
  {
    "latitude": 53.5910149,
    "longitude": -0.594394,
    "areacode": "E06000013",
    "name": "North Lincolnshire"
  },
  {
    "latitude": 52.9307213,
    "longitude": 1.297546,
    "areacode": "E07000147",
    "name": "North Norfolk"
  },
  {
    "latitude": 51.3900414,
    "longitude": -2.7943389,
    "areacode": "E06000024",
    "name": "North Somerset"
  },
  {
    "latitude": 55.0418587,
    "longitude": -1.447291,
    "areacode": "E08000022",
    "name": "North Tyneside"
  },
  {
    "latitude": 52.577282,
    "longitude": -1.546405,
    "areacode": "E07000218",
    "name": "North Warwickshire"
  },
  {
    "latitude": 52.7465935,
    "longitude": -1.4737279,
    "areacode": "E07000134",
    "name": "North West Leicestershire"
  },
  {
    "latitude": 54.190094,
    "longitude": -1.419103,
    "areacode": "E10000023",
    "name": "North Yorkshire"
  },
  {
    "latitude": 52.2348366,
    "longitude": -0.897323,
    "areacode": "E07000154",
    "name": "Northampton"
  },
  {
    "latitude": 52.2348366,
    "longitude": -0.897323,
    "areacode": "E10000021",
    "name": "Northamptonshire"
  },
  {
    "latitude": 55.1694145,
    "longitude": -1.6914279,
    "areacode": "E06000057",
    "name": "Northumberland"
  },
  {
    "latitude": 52.6281013,
    "longitude": 1.299349,
    "areacode": "E07000148",
    "name": "Norwich"
  },
  {
    "latitude": 52.9551163,
    "longitude": -1.1491669,
    "areacode": "E06000018",
    "name": "Nottingham"
  },
  {
    "latitude": 53.1336975,
    "longitude": -1.006416,
    "areacode": "E10000024",
    "name": "Nottinghamshire"
  },
  {
    "latitude": 52.4892408,
    "longitude": -1.4733965,
    "areacode": "E07000219",
    "name": "Nuneaton and Bedworth"
  },
  {
    "latitude": 52.597597,
    "longitude": -1.0808449,
    "areacode": "E07000135",
    "name": "Oadby and Wigston"
  },
  {
    "latitude": 53.5412483,
    "longitude": -2.11766,
    "areacode": "E08000004",
    "name": "Oldham"
  },
  {
    "latitude": 51.5001526,
    "longitude": -0.126236,
    "areacode": "E13000002",
    "name": "Outer London"
  },
  {
    "latitude": 51.7537422,
    "longitude": -1.26346,
    "areacode": "E07000178",
    "name": "Oxford"
  },
  {
    "latitude": 51.7537422,
    "longitude": -1.26346,
    "areacode": "E10000025",
    "name": "Oxfordshire"
  },
  {
    "latitude": 53.8356438,
    "longitude": -2.2166531,
    "areacode": "E07000122",
    "name": "Pendle"
  },
  {
    "latitude": 52.5733871,
    "longitude": -0.248461,
    "areacode": "E06000031",
    "name": "Peterborough"
  },
  {
    "latitude": 50.3703804,
    "longitude": -4.142653,
    "areacode": "E06000026",
    "name": "Plymouth"
  },
  {
    "latitude": 50.798912,
    "longitude": -1.091163,
    "areacode": "E06000044",
    "name": "Portsmouth"
  },
  {
    "latitude": 53.7577286,
    "longitude": -2.70344,
    "areacode": "E07000123",
    "name": "Preston"
  },
  {
    "latitude": 51.45504,
    "longitude": -0.969088,
    "areacode": "E06000038",
    "name": "Reading"
  },
  {
    "latitude": 51.5670013,
    "longitude": 0.083,
    "areacode": "E09000026",
    "name": "Redbridge"
  },
  {
    "latitude": 54.619248,
    "longitude": -1.0712469,
    "areacode": "E06000003",
    "name": "Redcar and Cleveland"
  },
  {
    "latitude": 52.3065834,
    "longitude": -1.944041,
    "areacode": "E07000236",
    "name": "Redditch"
  },
  {
    "latitude": 51.2407951,
    "longitude": -0.170087,
    "areacode": "E07000211",
    "name": "Reigate and Banstead"
  },
  {
    "latitude": 53.8728218,
    "longitude": -2.3907249,
    "areacode": "E07000124",
    "name": "Ribble Valley"
  },
  {
    "latitude": 51.4560013,
    "longitude": -0.301,
    "areacode": "E09000027",
    "name": "Richmond upon Thames"
  },
  {
    "latitude": 54.3300018,
    "longitude": -2.0120001,
    "areacode": "E07000166",
    "name": "Richmondshire"
  },
  {
    "latitude": 53.6163521,
    "longitude": -2.15871,
    "areacode": "E08000005",
    "name": "Rochdale"
  },
  {
    "latitude": 51.5838127,
    "longitude": 0.707085,
    "areacode": "E07000075",
    "name": "Rochford"
  },
  {
    "latitude": 53.7009506,
    "longitude": -2.2867451,
    "areacode": "E07000125",
    "name": "Rossendale"
  },
  {
    "latitude": 50.9864578,
    "longitude": -0.733593,
    "areacode": "E07000064",
    "name": "Rother"
  },
  {
    "latitude": 53.4302025,
    "longitude": -1.356846,
    "areacode": "E08000018",
    "name": "Rotherham"
  },
  {
    "latitude": 52.3732033,
    "longitude": -1.261739,
    "areacode": "E07000220",
    "name": "Rugby"
  },
  {
    "latitude": 51.4307518,
    "longitude": -0.548153,
    "areacode": "E07000212",
    "name": "Runnymede"
  },
  {
    "latitude": 52.9292374,
    "longitude": -1.134132,
    "areacode": "E07000176",
    "name": "Rushcliffe"
  },
  {
    "latitude": 51.2468719,
    "longitude": -0.766213,
    "areacode": "E07000092",
    "name": "Rushmoor"
  },
  {
    "latitude": 52.6608276,
    "longitude": -0.654721,
    "areacode": "E06000017",
    "name": "Rutland"
  },
  {
    "latitude": 54.246357,
    "longitude": -0.782141,
    "areacode": "E07000167",
    "name": "Ryedale"
  },
  {
    "latitude": 53.4877052,
    "longitude": -2.2904201,
    "areacode": "E08000006",
    "name": "Salford"
  },
  {
    "latitude": 52.5036201,
    "longitude": -1.965704,
    "areacode": "E08000028",
    "name": "Sandwell"
  },
  {
    "latitude": 54.2801361,
    "longitude": -0.402401,
    "areacode": "E07000168",
    "name": "Scarborough"
  },
  {
    "latitude": 51.1275597,
    "longitude": -3.004034,
    "areacode": "E07000188",
    "name": "Sedgemoor"
  },
  {
    "latitude": 53.5019379,
    "longitude": -2.973999,
    "areacode": "E08000014",
    "name": "Sefton"
  },
  {
    "latitude": 53.7815666,
    "longitude": -1.072428,
    "areacode": "E07000169",
    "name": "Selby"
  },
  {
    "latitude": 51.2699585,
    "longitude": 0.19308,
    "areacode": "E07000111",
    "name": "Sevenoaks"
  },
  {
    "latitude": 53.3830566,
    "longitude": -1.464795,
    "areacode": "E08000019",
    "name": "Sheffield"
  },
  {
    "latitude": 52.6354218,
    "longitude": -2.734153,
    "areacode": "E06000051",
    "name": "Shropshire"
  },
  {
    "latitude": 51.509346,
    "longitude": -0.595448,
    "areacode": "E06000039",
    "name": "Slough"
  },
  {
    "latitude": 52.414711,
    "longitude": -1.774296,
    "areacode": "E08000029",
    "name": "Solihull"
  },
  {
    "latitude": 51.0146523,
    "longitude": -3.103446,
    "areacode": "E10000027",
    "name": "Somerset"
  },
  {
    "latitude": 51.0146523,
    "longitude": -3.103446,
    "areacode": "E07000246",
    "name": "Somerset West and Taunton"
  },
  {
    "latitude": 52.1227341,
    "longitude": 0.169807,
    "areacode": "E07000012",
    "name": "South Cambridgeshire"
  },
  {
    "latitude": 52.774807,
    "longitude": -1.5572031,
    "areacode": "E07000039",
    "name": "South Derbyshire"
  },
  {
    "latitude": 51.5467491,
    "longitude": -2.4674649,
    "areacode": "E06000025",
    "name": "South Gloucestershire"
  },
  {
    "latitude": 50.3518028,
    "longitude": -3.5783851,
    "areacode": "E07000044",
    "name": "South Hams"
  },
  {
    "latitude": 52.786087,
    "longitude": -0.150293,
    "areacode": "E07000140",
    "name": "South Holland"
  },
  {
    "latitude": 52.9154243,
    "longitude": -0.640277,
    "areacode": "E07000141",
    "name": "South Kesteven"
  },
  {
    "latitude": 54.3267899,
    "longitude": -2.7475779,
    "areacode": "E07000031",
    "name": "South Lakeland"
  },
  {
    "latitude": 52.3776283,
    "longitude": 1.106377,
    "areacode": "E07000149",
    "name": "South Norfolk"
  },
  {
    "latitude": 52.1319885,
    "longitude": -0.988415,
    "areacode": "E07000155",
    "name": "South Northamptonshire"
  },
  {
    "latitude": 51.537529,
    "longitude": -0.904635,
    "areacode": "E07000179",
    "name": "South Oxfordshire"
  },
  {
    "latitude": 53.7516495,
    "longitude": -2.677483,
    "areacode": "E07000126",
    "name": "South Ribble"
  },
  {
    "latitude": 50.9437561,
    "longitude": -2.6297481,
    "areacode": "E07000189",
    "name": "South Somerset"
  },
  {
    "latitude": 52.7239075,
    "longitude": -2.115869,
    "areacode": "E07000196",
    "name": "South Staffordshire"
  },
  {
    "latitude": 54.9957962,
    "longitude": -1.427705,
    "areacode": "E08000023",
    "name": "South Tyneside"
  },
  {
    "latitude": 53.3830566,
    "longitude": -1.464795,
    "areacode": "E11000003",
    "name": "South Yorkshire (Met County)"
  },
  {
    "latitude": 50.9049644,
    "longitude": -1.403234,
    "areacode": "E06000045",
    "name": "Southampton"
  },
  {
    "latitude": 51.5404129,
    "longitude": 0.711756,
    "areacode": "E06000033",
    "name": "Southend-on-Sea"
  },
  {
    "latitude": 51.4741592,
    "longitude": -0.093181,
    "areacode": "E09000028",
    "name": "Southwark"
  },
  {
    "latitude": 51.4350166,
    "longitude": -0.508783,
    "areacode": "E07000213",
    "name": "Spelthorne"
  },
  {
    "latitude": 51.6865649,
    "longitude": -0.3899653,
    "areacode": "E07000240",
    "name": "St Albans"
  },
  {
    "latitude": 53.4538765,
    "longitude": -2.7368939,
    "areacode": "E08000013",
    "name": "St. Helens"
  },
  {
    "latitude": 52.8051414,
    "longitude": -2.1163471,
    "areacode": "E07000197",
    "name": "Stafford"
  },
  {
    "latitude": 52.8519592,
    "longitude": -2.03231,
    "areacode": "E10000028",
    "name": "Staffordshire"
  },
  {
    "latitude": 53.1066208,
    "longitude": -2.026757,
    "areacode": "E07000198",
    "name": "Staffordshire Moorlands"
  },
  {
    "latitude": 51.8998375,
    "longitude": -0.202583,
    "areacode": "E07000243",
    "name": "Stevenage"
  },
  {
    "latitude": 53.4084892,
    "longitude": -2.1492929,
    "areacode": "E08000007",
    "name": "Stockport"
  },
  {
    "latitude": 54.5682259,
    "longitude": -1.3144341,
    "areacode": "E06000004",
    "name": "Stockton-on-Tees"
  },
  {
    "latitude": 53.0257759,
    "longitude": -2.1773951,
    "areacode": "E06000021",
    "name": "Stoke-on-Trent"
  },
  {
    "latitude": 52.1915703,
    "longitude": -1.706989,
    "areacode": "E07000221",
    "name": "Stratford-on-Avon"
  },
  {
    "latitude": 51.7475777,
    "longitude": -2.215579,
    "areacode": "E07000082",
    "name": "Stroud"
  },
  {
    "latitude": 52.0593071,
    "longitude": 1.155672,
    "areacode": "E10000029",
    "name": "Suffolk"
  },
  {
    "latitude": 54.9044495,
    "longitude": -1.381453,
    "areacode": "E08000024",
    "name": "Sunderland"
  },
  {
    "latitude": 51.2364197,
    "longitude": -0.570291,
    "areacode": "E10000030",
    "name": "Surrey"
  },
  {
    "latitude": 51.3615913,
    "longitude": -0.69149,
    "areacode": "E07000214",
    "name": "Surrey Heath"
  },
  {
    "latitude": 52.5765686,
    "longitude": -0.381955,
    "areacode": "E09000029",
    "name": "Sutton"
  },
  {
    "latitude": 51.3407288,
    "longitude": 0.731556,
    "areacode": "E07000113",
    "name": "Swale"
  },
  {
    "latitude": 51.5584221,
    "longitude": -1.7820359,
    "areacode": "E06000030",
    "name": "Swindon"
  },
  {
    "latitude": 53.4809113,
    "longitude": -2.1121669,
    "areacode": "E08000008",
    "name": "Tameside"
  },
  {
    "latitude": 52.6342926,
    "longitude": -1.690711,
    "areacode": "E07000199",
    "name": "Tamworth"
  },
  {
    "latitude": 51.2379837,
    "longitude": -0.032548,
    "areacode": "E07000215",
    "name": "Tandridge"
  },
  {
    "latitude": 50.5319519,
    "longitude": -3.6087389,
    "areacode": "E07000045",
    "name": "Teignbridge"
  },
  {
    "latitude": 52.7302551,
    "longitude": -2.4887609,
    "areacode": "E06000020",
    "name": "Telford and Wrekin"
  },
  {
    "latitude": 51.8753662,
    "longitude": 1.111765,
    "areacode": "E07000076",
    "name": "Tendring"
  },
  {
    "latitude": 51.2093163,
    "longitude": -1.478352,
    "areacode": "E07000093",
    "name": "Test Valley"
  },
  {
    "latitude": 51.9959297,
    "longitude": -2.137733,
    "areacode": "E07000083",
    "name": "Tewkesbury"
  },
  {
    "latitude": 51.3699074,
    "longitude": 1.421276,
    "areacode": "E07000114",
    "name": "Thanet"
  },
  {
    "latitude": 55.7582686,
    "longitude": -4.201298,
    "areacode": "E07000102",
    "name": "Three Rivers"
  },
  {
    "latitude": 51.5060043,
    "longitude": 0.373024,
    "areacode": "E06000034",
    "name": "Thurrock"
  },
  {
    "latitude": 51.1959,
    "longitude": 0.274965,
    "areacode": "E07000115",
    "name": "Tonbridge and Malling"
  },
  {
    "latitude": 50.4517708,
    "longitude": -3.5579059,
    "areacode": "E06000027",
    "name": "Torbay"
  },
  {
    "latitude": 50.9535713,
    "longitude": -4.1409259,
    "areacode": "E07000046",
    "name": "Torridge"
  },
  {
    "latitude": 51.1296594,
    "longitude": 1.3045298,
    "areacode": "E09000030",
    "name": "Tower Hamlets"
  },
  {
    "latitude": 53.4243126,
    "longitude": -2.317858,
    "areacode": "E08000009",
    "name": "Trafford"
  },
  {
    "latitude": 51.1324272,
    "longitude": 0.263319,
    "areacode": "E07000116",
    "name": "Tunbridge Wells"
  },
  {
    "latitude": 54.9044495,
    "longitude": -1.381453,
    "areacode": "E11000007",
    "name": "Tyne and Wear (Met County)"
  },
  {
    "latitude": 52.019001,
    "longitude": 0.2367,
    "areacode": "E07000077",
    "name": "Uttlesford"
  },
  {
    "latitude": 51.6700706,
    "longitude": -1.285013,
    "areacode": "E07000180",
    "name": "Vale of White Horse"
  },
  {
    "latitude": 53.6829643,
    "longitude": -1.499097,
    "areacode": "E08000036",
    "name": "Wakefield"
  },
  {
    "latitude": 52.5859489,
    "longitude": -1.98229,
    "areacode": "E08000030",
    "name": "Walsall"
  },
  {
    "latitude": 51.5901985,
    "longitude": -0.017402,
    "areacode": "E09000031",
    "name": "Waltham Forest"
  },
  {
    "latitude": 51.4567909,
    "longitude": -0.192679,
    "areacode": "E09000032",
    "name": "Wandsworth"
  },
  {
    "latitude": 53.398819,
    "longitude": -2.5636029,
    "areacode": "E06000007",
    "name": "Warrington"
  },
  {
    "latitude": 52.2819443,
    "longitude": -1.584471,
    "areacode": "E07000222",
    "name": "Warwick"
  },
  {
    "latitude": 52.2819443,
    "longitude": -1.584471,
    "areacode": "E10000031",
    "name": "Warwickshire"
  },
  {
    "latitude": 51.6548538,
    "longitude": -0.398203,
    "areacode": "E07000103",
    "name": "Watford"
  },
  {
    "latitude": 53.3806763,
    "longitude": -1.369581,
    "areacode": "E07000216",
    "name": "Waverley"
  },
  {
    "latitude": 50.9724541,
    "longitude": 0.097117,
    "areacode": "E07000065",
    "name": "Wealden"
  },
  {
    "latitude": 52.3028984,
    "longitude": -0.693399,
    "areacode": "E07000156",
    "name": "Wellingborough"
  },
  {
    "latitude": 51.7627182,
    "longitude": -0.224709,
    "areacode": "E07000241",
    "name": "Welwyn Hatfield"
  },
  {
    "latitude": 51.4496002,
    "longitude": -1.304496,
    "areacode": "E06000037",
    "name": "West Berkshire"
  },
  {
    "latitude": 50.537868,
    "longitude": -4.1480834,
    "areacode": "E07000047",
    "name": "West Devon"
  },
  {
    "latitude": 53.5665779,
    "longitude": -2.8869121,
    "areacode": "E07000127",
    "name": "West Lancashire"
  },
  {
    "latitude": 53.3875084,
    "longitude": -0.337118,
    "areacode": "E07000142",
    "name": "West Lindsey"
  },
  {
    "latitude": 52.4828987,
    "longitude": -1.8934619,
    "areacode": "E11000005",
    "name": "West Midlands (Met County)"
  },
  {
    "latitude": 51.7837105,
    "longitude": -1.485517,
    "areacode": "E07000181",
    "name": "West Oxfordshire"
  },
  {
    "latitude": 52.2499084,
    "longitude": 0.60936,
    "areacode": "E07000245",
    "name": "West Suffolk"
  },
  {
    "latitude": 50.8366394,
    "longitude": -0.780178,
    "areacode": "E10000032",
    "name": "West Sussex"
  },
  {
    "latitude": 53.7996902,
    "longitude": -1.549103,
    "areacode": "E11000006",
    "name": "West Yorkshire (Met County)"
  },
  {
    "latitude": 51.4999924,
    "longitude": -0.131506,
    "areacode": "E09000033",
    "name": "Westminster"
  },
  {
    "latitude": 53.5442696,
    "longitude": -2.631063,
    "areacode": "E08000010",
    "name": "Wigan"
  },
  {
    "latitude": 51.2978325,
    "longitude": -1.945487,
    "areacode": "E06000054",
    "name": "Wiltshire"
  },
  {
    "latitude": 51.0616264,
    "longitude": -1.3105071,
    "areacode": "E07000094",
    "name": "Winchester"
  },
  {
    "latitude": 51.485672,
    "longitude": -0.699587,
    "areacode": "E06000040",
    "name": "Windsor and Maidenhead"
  },
  {
    "latitude": 53.3386917,
    "longitude": -3.0488501,
    "areacode": "E08000015",
    "name": "Wirral"
  },
  {
    "latitude": 51.3168068,
    "longitude": -0.55908,
    "areacode": "E07000217",
    "name": "Woking"
  },
  {
    "latitude": 51.4109726,
    "longitude": -0.834926,
    "areacode": "E06000041",
    "name": "Wokingham"
  },
  {
    "latitude": 52.5853348,
    "longitude": -2.1319251,
    "areacode": "E08000031",
    "name": "Wolverhampton"
  },
  {
    "latitude": 52.1920357,
    "longitude": -2.223532,
    "areacode": "E07000237",
    "name": "Worcester"
  },
  {
    "latitude": 52.1920357,
    "longitude": -2.223532,
    "areacode": "E10000034",
    "name": "Worcestershire"
  },
  {
    "latitude": 50.8147125,
    "longitude": -0.371387,
    "areacode": "E07000229",
    "name": "Worthing"
  },
  {
    "latitude": 52.0952072,
    "longitude": -1.946934,
    "areacode": "E07000238",
    "name": "Wychavon"
  },
  {
    "latitude": 59.1185455,
    "longitude": -2.973165,
    "areacode": "E07000128",
    "name": "Wyre"
  },
  {
    "latitude": 52.373121,
    "longitude": -2.324239,
    "areacode": "E07000239",
    "name": "Wyre Forest"
  },
  {
    "latitude": 53.9577446,
    "longitude": -1.0822591,
    "areacode": "E06000014",
    "name": "York"
  }
]
