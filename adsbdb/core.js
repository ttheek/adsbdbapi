class Core{
    constructor() {
        this.apiBaseUrl = 'https://api.adsbdb.com/v0';
        this.aircraftUrl = `${this.apiBaseUrl}/aircraft`; //MODE_S || REGISTRATION
        this.callsignUrl = `${this.apiBaseUrl}/callsign`; //ICAO || IATA
        this.airlineUrl = `${this.apiBaseUrl}/airline`; //ICAO || IATA
        this.nNumberUrl = `${this.apiBaseUrl}/n-number`; //N-Number string to MODE-S
        this.modeSUrl = `${this.apiBaseUrl}/mode-s`; //MODE-S string to N-Number
        this.onlineUrl = `${this.apiBaseUrl}/online`;
    }
}

export default new Core();