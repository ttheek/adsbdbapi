import APIRequest from "./request.js";
import { Aircraft, Airline, Callsign } from "./entities.js";

class AdsbdbAPI{
    constructor() {
        this.apiRequest = new APIRequest();
    }
    async getAircraft(code) {
        try {
            const data = await this.apiRequest.get(`/aircraft/${code}`);
            return new Aircraft(data.response.aircraft);
        } catch (error) {
            console.error("Error fetching aircraft:", error);
            throw error;
        }
    }

    async getAirline(code) {
        if (!code || typeof code !== "string" || code.length !== 2 && code.length !== 3) {
            throw new Error("Invalid IATA or ICAO code");
        }
        const formattedCode = code.toUpperCase();
        try {
            const data = await this.apiRequest.get(`/airline/${formattedCode}`);            
            return new Airline(data.response[0]);
        } catch (error) {
            console.error("Error fetching airline:", error);
            throw error;
        }
    }

    async getCallsign(callsign) {
        if (!callsign || typeof callsign !== "string") {
            throw new Error("Invalid callsign");
        }
        try {
            const data = await this.apiRequest.get(`/callsign/${callsign}`);
            // console.log("Fetched callsign data:", data.response.flightroute);
            
            return new Callsign(data.response.flightroute);
        } catch (error) {
            console.error("Error fetching callsign:", error);
            throw error;
        }
    }
}

export { AdsbdbAPI };