export enum FishType {
  Octopus,
  Shark,
  Seadragon,
  Jellyfish,
  Boxfish,
  Crab,
  Manta
}

export const FishTypeTranslation = new Map([
  [ FishType.Octopus , $localize`Octopus` ],
  [ FishType.Shark , $localize`Shark` ],
  [ FishType.Seadragon , $localize`Seadragon` ],
  [ FishType.Jellyfish , $localize`Jellyfish` ],
  [ FishType.Boxfish , $localize`Boxfish` ],
  [ FishType.Crab , $localize`Crab` ],
  [ FishType.Manta , $localize`Manta` ]
]);
