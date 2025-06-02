/**
 * Unofficial SDK for adsbdb.
 *
 * See more information at:
 * https://www.adsbdb.com
 * https://github.com/mrjackwills/adsbdb
 */
export class AdsbdbAPI {
    /**
     * Constructor of AdsbdbAPI class
     */
    constructor();

    /**
     * Fetches information about an aircraft based on its code.
     * 
     * @param {string} code - Mode-S or Registration of the aircraft.
     * @returns {Promise<Aircraft>} A promise that resolves to an Aircraft object.
     * @throws {Error} If there is an issue with the API request.
     */
    getAircraft(code: string): Promise<Aircraft>;

    /**
     * Fetches information about an airline based on its code.
     * 
     * @param {string} code - ICAO or IATA code of the airline.
     * @returns {Promise<Airline>} A promise that resolves to an Airline object.
     * @throws {Error} If there is an issue with the API request.
     */
    getAirline(code: string): Promise<Airline>;

    /**
     * Fetches information about a callsign.
     * 
     * @param {string} callsign - The callsign to look up.
     * @returns {Promise<Callsign>} A promise that resolves to a Callsign object.
     * @throws {Error} If there is an issue with the API request.
     */
    getCallsign(callsign: string): Promise<Callsign>;

    /**
     * Converts a Mode-S code to a registration number.
     * 
     * @param {string} code - The Mode-S code to convert.
     * @returns {Promise<string>} A promise that resolves to the registration number.
     * @throws {Error} If there is an issue with the API request.
     */
    modeStoN(code: string): Promise<string>;

    /**
     * Converts a N-number to a Mode-S code.
     * 
     * @param {string} code - The registration number to convert.
     * @returns {Promise<string>} A promise that resolves to the Mode-S code.
     * @throws {Error} If there is an issue with the API request.
     */
    nNumberToModeS(code: string): Promise<string>;
}
export class Aircraft {
    constructor(data: any);
    type: string;
    icaoType: string;
    manufacturer: string;
    modeS: string;
    registration: string;
    ownerCountryIso: string;
    ownerCountryName: string;
    operatorFlagCode: string | null;
    owner: string;
    photoUrl: string | null;
    thumbnailUrl: string | null;
    toString(): string;
}

export class Airline {
    constructor(data: any);
    name: string;
    icao: string;
    iata: string | null;
    country: string;
    countryIso: string;
    callsign: string | null;
    toString(): string;
}

export class Airport {
    constructor(data: any);
    countryIso: string;
    countryName: string;
    elevation: number;
    iata: string;
    icao: string;
    latitude: number;
    longitude: number;
    municipality: string;
    name: string;
}

export class Callsign {
    constructor(data: any);
    callsign: string;
    callsignIcao: string | null;
    callsignIata: string | null;
    airline: Airline | null;
    origin: Airport;
    midpoint: Airport | null;
    destination: Airport;
    toString(): string;
}

export function getAircraft(code: string): Promise<Aircraft>;
export function getAirline(code: string): Promise<Airline>;
export function getCallsign(callsign: string): Promise<Callsign>;
export function modeStoN(code: string): Promise<string>;
export function nNumberToModeS(code: string): Promise<string>;

export const author: string;
export const version: string;