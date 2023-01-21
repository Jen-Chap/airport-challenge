const Plane = require('./Plane.js')

class Airport {
  planesAtAirport = []

  constructor(name, airportCapacity = 10) {
    if (typeof (airportCapacity === 'number') && airportCapacity > 0) {
      this.airportCapacity = airportCapacity
    } else { this.airportCapacity = "Capacity not set, must be a positive integer" };
    this.name = name;
  };

  atCapacity = () => {
    return this.planesAtAirport.length === this.airportCapacity ? true : false  //Can this be written in a simpler way aka not writing true and false?
  }

  isPlaneAtAirport = (plane) => {
    return this.planesAtAirport.includes(plane.planeID) ? true : false;
  }

  planeLands = (plane, currentWeather) => {
    return plane instanceof Plane && this.atCapacity() === false && this.isPlaneAtAirport(plane) === false && currentWeather !== 'stormy' ? this.planesAtAirport.push(plane.planeID) : "Unable to land";
    //Are there too many conditions for one line in line above? Would if statement be better? Or create a separate 'safeToLand' method?
  };

  planeTakesOff = (plane, currentWeather = 'sunny') => {
    if (this.isPlaneAtAirport(plane) && currentWeather !== 'stormy') {
      const index = this.planesAtAirport.indexOf(plane.planeID);
      this.planesAtAirport.splice(index, 1);
    } else { return "Plane cannot take off" }
  };

}

module.exports = Airport;
