// import { TimeOfDay, Weather } from "./enums.js";
// import { Fish } from "./fish.js";

// export class OceanFishingLocation {
//   constructor(
//     public translationKey: string,
//     public fish: Fish[] = []
//   ) {}

//   addFish(fish: Fish[]) {
//     fish.forEach((fish) => this.fish.push(fish));
//   }

//   getInformation(timeOfDay: TimeOfDay) {
//     console.log(this.getBaitOrderForSpectralAtTime(timeOfDay));

//     return {
//     }
//   }

//   getBaitOrderForSpectralAtTime(timeOfDay: TimeOfDay) {
//     const result = this.fish
//       .filter((fish) => this.isSpectral(fish))
//       .filter((fish) => {
//         console.log(fish);
//         return !fish.timeConditions || fish.timeConditions === timeOfDay
//       })
//       .reduce((prev, next) => {
//         console.log(next);
//         prev[ next.bait ] = prev[ next.bait ] || {};
//         prev[ next.bait ][ next.tug ] = prev[ next.bait ][ next.tug ] || [];

//         prev[ next.bait ][ next.tug ].push(next);

//         return prev;
//       }, <any>{});

//     return result;
//   }

//   private isSpectral(fish: Fish) {
//     console.log(fish);
//     return fish && fish.weatherConditions && fish.weatherConditions.includes(Weather.Spectral);
//   }

//   private orderByDoubleHookValue(a: Fish, b: Fish) {
//     return a.score * a.maxHookable < b.score * b.maxHookable;
//   }
// }
