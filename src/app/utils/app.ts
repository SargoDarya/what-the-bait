import { TimeOfDay } from './enums.js';
import { OceanFishingLocation } from './ocean-fishing-location.js';
import { Route } from './route.js';

class OFHelper {
  private pattern = [
    7,10,1,4,8,11,2,5,12,3,6,
    7,10,1,4,8,11,2,5,9,3,6,
    7,10,1,4,8,11,2,5,9,12,6,
    7,10,1,4,8,11,2,5,9,12,3,
    7,10,1,4,8,11,2,5,9,12,3,6,
    10,1,4,8,11,2,5,9,12,3,6,
    7,1,4,8,11,2,5,9,12,3,6,
    7,10,4,8,11,2,5,9,12,3,6,
    7,10,1,8,11,2,5,9,12,3,6,
    7,10,1,4,11,2,5,9,12,3,6,
    7,10,1,4,8,2,5,9,12,3,6,
    7,10,1,4,8,11,5,9,12,3,6,
    7,10,1,4,8,11,2,9,12,3,6
  ];

  private locations: Map<string, OceanFishingLocation> = new Map();

  private routes: Route[] = [];

  private routesOld = [
    "South at Night, Galadion at Day, North at Sunset",
    "South at Day, Galadion at Sunset, North at Night",
    "South at Sunset, Galadion at Night, North at Day",
    "Galadion at Night, South at Day, Rhotano at Sunset",
    "Galadion at Day, South at Sunset, Rhotano at Night",
    "Galadion at Sunset, South at Night, Rhotano at Day",
    "Ciel at Night, North at Day, Blood at Sunset",
    "Ciel at Day, North at Sunset, Blood at Night",
    "Ciel at Sunset, North at Night, Blood at Day",
    "Ciel at Night, Rhotano at Day, Sound at Sunset",
    "Ciel at Day, Rhotano at Sunset, Sound at Night",
    "Ciel at Sunset, Rhotano at Night, Sound at Day"
  ];

  async loadData() {
    return fetch('./fish.json')
      .then((response) => response.json())
      .then(this.createLocationsFromJSON.bind(this));
  }

  createLocationsFromJSON(locations: OceanFishingLocation[]) {
    for (let location of locations) {
      this.locations.set(
        location.translationKey,
        new OceanFishingLocation(location.translationKey, location.fish)
      );
    }
  }

  getCurrentRoute() {
    const currentTime = new Date();
    const TWO_HOURS = 60 * 60 * 2;
    var selectedTwoHourChunk = Math.floor(currentTime.getTime() / 1000 / TWO_HOURS);

    // align the number that is assigned to the next two hour block to the pattern array
    var offset = 88;
    var tempTime = (selectedTwoHourChunk + offset) % this.pattern.length;

    const currentPatternIndex = ((tempTime >= this.pattern.length) ? (tempTime - this.pattern.length) : tempTime);
    const currentRoute = this.routes[ this.pattern[ currentPatternIndex ] ];

    console.log(currentPatternIndex);
    console.log(currentRoute.toString());
    currentRoute.getBaitForStop(0);
  }

}

async function main() {
  const ofhelper = new OFHelper();
  await ofhelper.loadData();
  ofhelper.createRoutes();
  ofhelper.getCurrentRoute();

  return new Promise((resolve) => resolve(null));
}

main();
