export enum Bait {
  PlumpWorm,
  Ragworm,
  Krill,
  Glowworm,
  ShrimpCageFeeder,
  HeavySteelJig,
  RatTail,
  SquidStrip,
  PillBug,
  Mooch
}

export const BaitTranslation = new Map(
  [
    [ Bait.PlumpWorm, $localize`Plump Worm` ],
    [ Bait.Ragworm, $localize`Ragworm` ],
    [ Bait.Krill, $localize`Krill` ],
    [ Bait.Glowworm, $localize`Glowworm` ],
    [ Bait.ShrimpCageFeeder, $localize`Shrimp Cage Feeder` ],
    [ Bait.HeavySteelJig, $localize`Heavy Steel Jig` ],
    [ Bait.RatTail, $localize`Rat Tail` ],
    [ Bait.SquidStrip, $localize`Squid Strip` ],
    [ Bait.PillBug, $localize`Pill Bug` ],
    [ Bait.Mooch, $localize`Mooch` ],
  ]
);
