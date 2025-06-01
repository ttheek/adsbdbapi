import APIRequest from "./request.js";
import { Aircraft, Airline, Callsign } from "./entities.js";

/**
 * Main class of the AdsbdbAPI
 */
class AdsbdbAPI{
    /**
     * Initializes a new instance of the AdsbdbAPI class.
     */
    constructor() {
        this.apiRequest = new APIRequest();
    }

    /**
     * Fetches information about an aircraft based on its code.
     * 
     * @param {string} code - Mode-S or Registration of the aircraft.
     * @returns {Promise<Aircraft>} A promise that resolves to an Aircraft object.
     * @throws {Error} If there is an issue with the API request.
     */
    async getAircraft(code) {
        try {
            const data = await this.apiRequest.get(`/aircraft/${code}`);
            return new Aircraft(data.response.aircraft);
        } catch (error) {
            console.error("Error fetching aircraft:", error);
            throw error;
        }
    }

    /**
     * Fetches information about an airline based on its IATA or ICAO code.
     * 
     * @param {string} code - The IATA (2 characters) or ICAO (3 characters) code of the airline.
     * @returns {Promise<Airline>} A promise that resolves to an Airline object.
     * @throws {Error} If the code is invalid or there is an issue with the API request.
     */
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

    /**
     * Fetches information about a flight route based on its callsign.
     * 
     * @param {string} callsign - The callsign of the flight.
     * @returns {Promise<Callsign>} A promise that resolves to a Callsign object.
     * @throws {Error} If the callsign is invalid or there is an issue with the API request.
     */
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