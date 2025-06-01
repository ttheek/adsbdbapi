import { AdsbdbAPI } from './api.js';
const api = new AdsbdbAPI();

async function exampleUsage() {
    try {
        const aircraft = await api.getAircraft('D-KIDP');
        console.log('Aircraft:', aircraft.toString());

        const airline = await api.getAirline('DLH');
        console.log('Airline:', airline.toString());

        const callsign = await api.getCallsign('DLH18Y');
        console.log('Callsign:', callsign.toString());
    } catch (error) {
        console.error('Error in example usage:', error);
    }
}

exampleUsage();