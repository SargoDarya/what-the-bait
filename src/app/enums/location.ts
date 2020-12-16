export enum Location {
  GaladionBay,
  RhotanoSea,
  SouthernMerlthor,
  NorthernMerlthor,
  Cieldales,
  Bloodbrine,
  RothlytSound
}

export const LocationTranslation = new Map([
  [ Location.GaladionBay, $localize`Galadion Bay` ],
  [ Location.RhotanoSea, $localize`Rhotano Sea` ],
  [ Location.SouthernMerlthor, $localize`Southern Strait of Merlthor` ],
  [ Location.NorthernMerlthor, $localize`Northern Strait of Merlthor` ],
  [ Location.Cieldales, $localize`Cieldales` ],
  [ Location.Bloodbrine, $localize`Bloodbrine` ],
  [ Location.RothlytSound, $localize`Rothlyt Sound` ]
]);
