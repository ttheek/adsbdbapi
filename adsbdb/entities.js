class Aircraft {
    constructor(data) {
      this.type = data.type;
      this.icaoType = data.icao_type;
      this.manufacturer = data.manufacturer;
      this.modeS = data.mode_s;
      this.registration = data.registration;
      this.ownerCountryIso = data.registered_owner_country_iso_name;
      this.ownerCountryName = data.registered_owner_country_name;
      this.operatorFlagCode = data.registered_owner_operator_flag_code || null;
      this.owner = data.registered_owner;
      this.photoUrl = data.url_photo || null;
      this.thumbnailUrl = data.url_photo_thumbnail || null;
    }
  
    toString() {
      return `${this.manufacturer} ${this.type} (${this.registration})`;
    }
}

class Airline {
    constructor(data) {
      this.name = data.name;
      this.icao = data.icao;
      this.iata = data.iata || null;
      this.country = data.country;
      this.countryIso = data.country_iso;
      this.callsign = data.callsign || null;
    }
  
    toString() {
      return `${this.name} (${this.icao}) - ${this.country}`;
    }
}

class Airport {
    constructor(data) {
        this.countryIso = data.country_iso_name;
        this.countryName = data.country_name;
        this.elevation = data.elevation;
        this.iata = data.iata_code;
        this.icao = data.icao_code;
        this.latitude = data.latitude;
        this.longitude = data.longitude;
        this.municipality = data.municipality;
        this.name = data.name;
    }
}  

class Callsign {
    constructor(data) {
      this.callsign = data.callsign;
      this.callsignIcao = data.callsign_icao || null;
      this.callsignIata = data.callsign_iata || null;
      this.airline = data.airline ? new Airline(data.airline) : null;
      this.origin = new Airport(data.origin);
      this.midpoint = data.midpoint ? new Airport(data.midpoint) : null;
      this.destination = new Airport(data.destination);
    }
  
    toString() {
      return `${this.callsign} (${this.airline ? this.airline.toString() : 'Unknown Airline'}) | ${this.origin.icao} ⇒ ${this.destination.icao}`;
    }
}

export { Aircraft, Airline, Airport, Callsign };