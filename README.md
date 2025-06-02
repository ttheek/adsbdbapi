
# adsbdbapi  

**Unofficial SDK for adsbdb**  

This is an unofficial JavaScript SDK for the [adsbdb](https://www.adsbdb.com) API.

## Installation

Install the package using npm:

```bash

npm install adsbdbapi

```

## Usage  

```javascript

import { AdsbdbAPI } from  'adsbdbapi';
const  api = new  AdsbdbAPI(); 

const  aircraft = await  api.getAircraft('D-KIDP');
console.log(aircraft.toString()); 

const  airline = await  api.getAirline('DLH');
console.log(airline.toString());  

const  callsign = await  api.getCallsign('DLH18Y');
console.log(callsign.toString()); 

const  registration = await  api.modeStoN('A12345');
console.log(registration);  

const  modeS = await  api.nNumberToModeS('N12345');
console.log(modeS);

```
