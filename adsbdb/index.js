/**
 * Unofficial SDK for adsbdb.
 *
 * See more information at:
 * https://www.adsbdb.com
 * https://github.com/mrjackwills/adsbdb
 */
import { getAircraft, getAirline, getCallsign, modeStoN, nNumberToModeS } from "./api.js";
import { Aircraft, Airline, Callsign } from "./entities.js";

const author = "T.Theekshana"
const version = "1.1.0";

export {
    getAircraft,
    getAirline,
    getCallsign,
    modeStoN,
    nNumberToModeS,
    Aircraft,
    Airline,
    Callsign,
    author,
    version
};