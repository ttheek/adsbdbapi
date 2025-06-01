import APIRequest from "./request.js";
import { Aircraft, Airline, Callsign } from "./entities.js";

const apiRequest = new APIRequest();

export async function getAircraft(code) {
    try {
        const data = await apiRequest.get(`/aircraft/${code}`);
        // console.log("Fetched aircraft data:", data);
        return new Aircraft(data.response.aircraft);
    } catch (error) {
        console.error("Error fetching aircraft:", error);
        throw error;
    }
}

export async function getAirline(code) {
    if (!code || typeof code !== "string" || code.length !== 2 && code.length !== 3) {
        throw new Error("Invalid IATA or ICAO code");
    }
    const formattedCode = code.toUpperCase();
    try {
        const data = await apiRequest.get(`/airline/${formattedCode}`);
        // console.log("Fetched airline data:", data.response.name);
        
        return new Airline(data.response[0]);
    } catch (error) {
        console.error("Error fetching airline:", error);
        throw error;
    }
}

export async function getCallsign(callsign) {
    if (!callsign || typeof callsign !== "string") {
        throw new Error("Invalid callsign");
    }
    try {
        const data = await apiRequest.get(`/callsign/${callsign}`);
        // console.log("Fetched callsign data:", data.response.flightroute);
        
        return new Callsign(data.response.flightroute);
    } catch (error) {
        console.error("Error fetching callsign:", error);
        throw error;
    }
}