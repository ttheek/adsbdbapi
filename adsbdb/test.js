import { getAircraft, getAirline, fetchCallsign } from './api.js';

async function exampleUsage() {
    try {
        const aircraft = await getAircraft('D-KIDP');
        console.log('Aircraft:', aircraft.toString());

        const airline = await getAirline('DLH');
        console.log('Airline:', airline.toString());

        const callsign = await fetchCallsign('DLH18Y');
        console.log('Callsign:', callsign.toString());
    } catch (error) {
        console.error('Error in example usage:', error);
    }
}

exampleUsage();