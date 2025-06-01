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
            if (!data.response || data.response === "unknown aircraft") {
                throw new Error("Unknown aircraft");
            }
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
            if (!data.response || data.response === "unknown airline") {
                throw new Error("Unknown airline"); 
            }          
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
            if (!data.response || data.response === "unknown callsign") {
                throw new Error("Unknown aircraft");
            };
            
            return new Callsign(data.response.flightroute);
        } catch (error) {
            console.error("Error fetching callsign:", error);
            throw error;
        }
    }

    /**
     * Converts a North American Mode-S code to its corresponding identifier.
     *
     * @async
     * @param {string} code - The Mode-S code to be converted. Must be a 6-character string.
     * @throws {Error} Throws an error if the code is invalid, not North American, or unknown.
     * @returns {Promise<string>} The identifier corresponding to the given Mode-S code.
     */
    async modeStoN(code) {
        if (!code || typeof code !== "string" || code.length !== 6) {
            throw new Error("Invalid Mode-S code");
        }
        // Check if the Mode-S code prefix is North American
        const prefix = code.substring(0, 2).toUpperCase();
        const northAmericanPrefixes = ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"];
        if (!northAmericanPrefixes.includes(prefix)) {
            throw new Error("Mode-S code is not North American");
        }
        try {
            const data = await this.apiRequest.get(`/mode-s/${code}`); 
            if (!data.response || data.response === "") {
                throw new Error("Unknown Mode-S code"); 
            }          
            return data.response;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }

    /**
     * Converts an N-Number (aircraft registration number) to a Mode S code.
     *
     * @param {string} code - The N-Number to be converted. Must be a string starting with "N" and at least 3 characters long.
     * @returns {Promise<string>} - A promise that resolves to the Mode S code corresponding to the given N-Number.
     * @throws {Error} - Throws an error if the input is invalid, the N-Number is unknown, or if there is an issue with the API request.
     */
    async nNumberToModeS(code) {
        if (!code || typeof code !== "string" || code.length < 3 || !/^N/i.test(code)) {
            throw new Error("Invalid N-Number");
        }
        try {
            const data = await this.apiRequest.get(`/n-number/${code}`); 
            if (!data.response || data.response === "") {
                throw new Error("Unknown N-Number"); 
            }          
            return data.response;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
}

export { AdsbdbAPI };