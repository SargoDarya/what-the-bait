import { Bait, FishType, Location, TimeOfDay, Weather } from './enums/';
import { FishDescription, StaticLocationData } from './models/static-location-data';

function makeFish(
  name: string,
  preferredBait: Bait,
  tug: number,
  minBiteTime: number,
  maxBiteTime: number,
  points: number,
  dhBonus: number,
  type?: FishType,
  onlyDuringSpectral: boolean = false,
  badWeather: Weather[] = [],
  triggersSpectral: boolean = false,
  intuition: boolean = false
): FishDescription {
  return {
    name,
    preferredBait,
    tug,
    minBiteTime,
    maxBiteTime,
    badWeather,
    points,
    dhBonus,
    onlyDuringSpectral,
    triggersSpectral,
    type,
    intuition
  };
}

export const StaticFish = {
  SpectralMegalodon: makeFish($localize`Spectral Megalodon`, Bait.PlumpWorm, 3, 18, 35, 100, 1, null, false, null, true, false),
  GaladionGoby: makeFish($localize`Galadion Goby`, Bait.Ragworm, 1, 6, 8, 10, 2, null, false, null, false, false),
  Heavenswimmer: makeFish($localize`Heavenswimmer`, Bait.Ragworm, 1, 19, 23, 50, 2, null, false, null, false, false),
  GaladionChovy: makeFish($localize`Galadion Chovy`, Bait.Krill, 1, 8, 10, 11, 2, null, false, null, false, false),
  RosyBream: makeFish($localize`Rosy Bream`, Bait.Krill, 1, 8, 17, 34, 3, null, false, null, false, false),
  Jasperhead: makeFish($localize`Jasperhead`, Bait.Krill, 2, 14, 24, 40, 2, null, false, [ Weather.Clouds,Weather.Fog ], false, false),
  CyanOctopus: makeFish($localize`Cyan Octopus`, Bait.Krill, 2, 18, 29, 59, 4, FishType.Octopus, false, null, false, false),
  LeopardEel: makeFish($localize`Leopard Eel`, Bait.PlumpWorm, 2, 10, 17, 14, 2, null, false, [ Weather.Rain,Weather.Showers ], false, false),
  TarnishedShark: makeFish($localize`Tarnished Shark`, Bait.PlumpWorm, 3, 16, 33, 34, 2, FishType.Shark, false, [ Weather.Showers ], false, false),
  Drunkfish: makeFish($localize`Drunkfish`, Bait.Krill, 3, 17, 26, 253, 1, null, false, null, false, true),
  Heavenskey: makeFish($localize`Heavenskey`, Bait.Ragworm, 1, 2, 2, 67, 2, null, true, [ Weather.Spectral ], false, false),
  NavigatorsPrint: makeFish($localize`Navigators Print`, Bait.Krill, 1, 3, 4, 71, 2, null, true, [ Weather.Spectral ], false, false),
  MermansMane: makeFish($localize`Mermans Mane`, Bait.Krill, 2, 2, 2, 94, 4, FishType.Octopus, true, [ Weather.Spectral ], false, false),
  Fishmonger: makeFish($localize`Fishmonger`, Bait.PlumpWorm, 2, 5, 7, 78, 2, null, true, [ Weather.Spectral ], false, false),
  GhostShark: makeFish($localize`Ghost Shark`, Bait.PlumpWorm, 2, 3, 4, 78, 4, FishType.Shark, true, [ Weather.Spectral ], false, false),
  QuicksilverBlade: makeFish($localize`Quicksilver Blade`, Bait.PlumpWorm, 2, 6, 6, 213, 2, FishType.Shark, true, [ Weather.Spectral ], false, false),
  FunnelShark: makeFish($localize`Funnel Shark`, Bait.PlumpWorm, 3, 8, 10, 213, 4, FishType.Shark, true, [ Weather.Spectral ], false, false),
  CasketOyster: makeFish($localize`Casket Oyster`, Bait.Ragworm, 1, 8, 10, 222, 2, null, true, [ Weather.Spectral ], false, false),
  NimbleDancer: makeFish($localize`Nimble Dancer`, Bait.Ragworm, 1, 10, 19, 444, 2, null, true, [ Weather.Spectral ], false, false),
  Sothis: makeFish($localize`Sothis`, Bait.Glowworm, 3, 10, 12, 500, 1, null, true, [ Weather.Spectral ], false, true),
  SpectralDiscus: makeFish($localize`Spectral Discus`, Bait.Krill, 3, 21, 34, 100, 1, null, false, null, true, false),
  Sunfly: makeFish($localize`Sunfly`, Bait.Ragworm, 1, 6, 10, 10, 2, null, false, null, false, false),
  LaNosceanJelly: makeFish($localize`La Noscean Jelly`, Bait.Ragworm, 1, 3, 4, 10, 3, FishType.Jellyfish, false, null, false, false),
  ShaggySeadragon: makeFish($localize`Shaggy Seadragon`, Bait.Ragworm, 1, 12, 20, 35, 4, FishType.Seadragon, false, [ Weather.Clouds,Weather.Fog ], false, false),
  MerlthorButterfly: makeFish($localize`Merlthor Butterfly`, Bait.Ragworm, 1, 16, 32, 51, 2, null, false, null, false, false),
  MarineBomb: makeFish($localize`Marine Bomb`, Bait.Krill, 1, 5, 12, 27, 2, FishType.Boxfish, false, null, false, false),
  GhoulBarracuda: makeFish($localize`Ghoul Barracuda`, Bait.Krill, 2, 4, 14, 10, 2, null, false, [ Weather.Wind,Weather.Gales ], false, false),
  Gladius: makeFish($localize`Gladius`, Bait.Mooch, 2, 8, 12, 49, 2, null, false, [ Weather.Wind,Weather.Gales ], false, false),
  MomoraMora: makeFish($localize`Momora Mora`, Bait.PlumpWorm, 3, 9, 20, 22, 2, null, false, null, false, false),
  LittleLeviathan: makeFish($localize`Little Leviathan`, Bait.PlumpWorm, 3, 18, 26, 204, 1, null, false, [ Weather.Wind,Weather.Gales ], false, true),
  CharlatanSurvivor: makeFish($localize`Charlatan Survivor`, Bait.Krill, 1, 3, 4, 69, 2, null, true, [ Weather.Spectral ], false, false),
  AzeymasSleeve: makeFish($localize`Azeymas Sleeve`, Bait.Krill, 1, 5, 6, 69, 2, null, true, [ Weather.Spectral ], false, false),
  HiAetherlouse: makeFish($localize`Hi-Aetherlouse`, Bait.PlumpWorm, 1, 4, 5, 65, 2, null, true, [ Weather.Spectral ], false, false),
  ShipwrecksSail: makeFish($localize`Shipwrecks Sail`, Bait.PlumpWorm, 2, 2, 4, 59, 2, null, true, [ Weather.Spectral ], false, false),
  GreatGrandmarlin: makeFish($localize`Great Grandmarlin`, Bait.Mooch, 2, 2, 2, 127, 2, null, true, [ Weather.Spectral ], false, false),
  Roguesaurus: makeFish($localize`Roguesaurus`, Bait.Mooch, 3, 3, 3, 345, 2, null, true, [ Weather.Spectral ], false, false),
  SeaNettle: makeFish($localize`Sea Nettle`, Bait.Ragworm, 1, 7, 8, 156, 4, FishType.Jellyfish, true, [ Weather.Spectral ], false, false),
  MythrilSovereign: makeFish($localize`Mythril Sovereign`, Bait.Krill, 2, 5, 6, 196, 2, null, true, [ Weather.Spectral ], false, false),
  AethericSeadragon: makeFish($localize`Aetheric Seadragon`, Bait.Mooch, 2, 4, 5, 245, 2, FishType.Seadragon, true, [ Weather.Spectral ], false, false),
  CoralManta: makeFish($localize`Coral Manta`, Bait.ShrimpCageFeeder, 3, 10, 12, 500, 1, null, true, [ Weather.Spectral ], false, true),
  SpectralSeaBo: makeFish($localize`Spectral Sea Bo`, Bait.Ragworm, 3, 22, 33, 100, 1, null, false, null, true, false),
  Floefish: makeFish($localize`Floefish`, Bait.Ragworm, 1, 5, 7, 13, 2, null, false, [ Weather.Blizzards,Weather.Snow ], false, false),
  TossedDagger: makeFish($localize`Tossed Dagger`, Bait.Ragworm, 1, 12, 16, 27, 2, null, false, null, false, false),
  ElderDinichthys: makeFish($localize`Elder Dinichthys`, Bait.Mooch, 2, 13, 17, 52, 2, null, false, null, false, false),
  OschonsStone: makeFish($localize`Oschons Stone`, Bait.PlumpWorm, 2, 12, 21, 11, 2, null, false, null, false, false),
  Megasquid: makeFish($localize`Megasquid`, Bait.PlumpWorm, 2, 6, 11, 11, 2, null, false, null, false, false),
  NetCrawler: makeFish($localize`Net Crawler`, Bait.Krill, 2, 14, 21, 36, 2, FishType.Crab, false, null, false, false),
  TripodFish: makeFish($localize`Tripod Fish`, Bait.Krill, 1, 16, 23, 43, 2, FishType.Boxfish, false, [ Weather.Clouds,Weather.Fog ], false, false),
  MerlthorLobster: makeFish($localize`Merlthor Lobster`, Bait.Krill, 1, 18, 27, 45, 2, null, false, null, false, false),
  ShootingStar: makeFish($localize`Shooting Star`, Bait.Ragworm, 3, 21, 26, 226, 1, null, false, null, false, true),
  Hammerclaw: makeFish($localize`Hammerclaw`, Bait.Krill, 1, 2, 2, 69, 2, null, true, [ Weather.Spectral ], false, false),
  Prowler: makeFish($localize`Prowler`, Bait.Ragworm, 1, 3, 4, 79, 2, null, true, [ Weather.Spectral ], false, false),
  WildUrchin: makeFish($localize`Wild Urchin`, Bait.Ragworm, 1, 3, 8, 79, 2, null, true, [ Weather.Spectral ], false, false),
  Coccosteus: makeFish($localize`Coccosteus`, Bait.PlumpWorm, 2, 2, 3, 79, 2, null, true, [ Weather.Spectral ], false, false),
  Gugrusaurus: makeFish($localize`Gugrusaurus`, Bait.PlumpWorm, 3, 6, 7, 79, 3, null, true, [ Weather.Spectral ], false, false),
  Mopbeard: makeFish($localize`Mopbeard`, Bait.Krill, 2, 6, 8, 198, 4, FishType.Octopus, true, [ Weather.Spectral ], false, false),
  BartholomewtheChopper: makeFish($localize`Bartholomew the Chopper`, Bait.Ragworm, 1, 5, 5, 221, 4, FishType.Crab, true, [ Weather.Spectral ], false, false),
  CoralSeadragon: makeFish($localize`Coral Seadragon`, Bait.Ragworm, 1, 8, 11, 189, 4, FishType.Seadragon, true, [ Weather.Spectral ], false, false),
  TheFallenOne: makeFish($localize`The Fallen One`, Bait.Krill, 2, 7, 8, 374, 2, null, true, [ Weather.Spectral ], false, false),
  Elasmosaurus: makeFish($localize`Elasmosaurus`, Bait.HeavySteelJig, 3, 10, 12, 500, 1, null, true, [ Weather.Spectral ], false, true),
  SpectralBass: makeFish($localize`Spectral Bass`, Bait.PlumpWorm, 3, 21, 34, 100, 1, null, false, null, true, false),
  RhotanoWahoo: makeFish($localize`Rhotano Wahoo`, Bait.Krill, 2, 5, 13, 13, 2, null, false, [ Weather.HeatWaves ], false, false),
  DeepPlaice: makeFish($localize`Deep Plaice`, Bait.Krill, 2, 8, 11, 15, 2, null, false, [ Weather.DustStorms ], false, false),
  DarkNautilus: makeFish($localize`Dark Nautilus`, Bait.Krill, 1, 17, 28, 46, 2, null, false, null, false, false),
  RhotanoSardine: makeFish($localize`Rhotano Sardine`, Bait.Ragworm, 1, 6, 10, 10, 2, null, false, null, false, false),
  Lampfish: makeFish($localize`Lampfish`, Bait.Ragworm, 1, 12, 16, 47, 2, FishType.Boxfish, false, null, false, false),
  CrimsonMonkfish: makeFish($localize`Crimson Monkfish`, Bait.PlumpWorm, 2, 9, 18, 32, 4, null, false, null, false, false),
  OgreEel: makeFish($localize`Ogre Eel`, Bait.PlumpWorm, 2, 8, 18, 38, 2, null, false, [ Weather.Clouds,Weather.Fog ], false, false),
  ChromeHammerhead: makeFish($localize`Chrome Hammerhead`, Bait.PlumpWorm, 3, 15, 28, 32, 4, FishType.Shark, false, null, false, false),
  Sabaton: makeFish($localize`Sabaton`, Bait.Krill, 3, 16, 19, 204, 1, null, false, null, false, true),
  DeepseaEel: makeFish($localize`Deep-sea Eel`, Bait.PlumpWorm, 2, 7, 8, 81, 2, null, true, [ Weather.Spectral ], false, false),
  Silencer: makeFish($localize`Silencer`, Bait.Ragworm, 1, 4, 6, 89, 4, FishType.Boxfish, true, [ Weather.Spectral ], false, false),
  Aronnax: makeFish($localize`Aronnax`, Bait.Krill, 1, 2, 2, 95, 2, null, true, [ Weather.Spectral ], false, false),
  TrueBarramundi: makeFish($localize`True Barramundi`, Bait.Krill, 2, 4, 8, 85, 2, null, true, [ Weather.Spectral ], false, false),
  ProdigalSon: makeFish($localize`Prodigal Son`, Bait.Krill, 2, 6, 6, 95, 2, null, true, [ Weather.Spectral ], false, false),
  FloatingSaucer: makeFish($localize`Floating Saucer`, Bait.Krill, 1, 8, 10, 222, 4, FishType.Jellyfish, true, [ Weather.Spectral ], false, false),
  Slipsnail: makeFish($localize`Slipsnail`, Bait.Ragworm, 1, 6, 8, 246, 2, null, true, [ Weather.Spectral ], false, false),
  Sweeper: makeFish($localize`Sweeper`, Bait.PlumpWorm, 2, 6, 6, 216, 2, FishType.Shark, true, [ Weather.Spectral ], false, false),
  Executioner: makeFish($localize`Executioner`, Bait.PlumpWorm, 3, 7, 9, 216, 4, FishType.Shark, true, [ Weather.Spectral ], false, false),
  Stonescale: makeFish($localize`Stonescale`, Bait.RatTail, 3, 10, 12, 500, 1, null, true, [ Weather.Spectral ], false, true),
  SpectralButterfly: makeFish($localize`Spectral Butterfly`, Bait.Ragworm, 3, 13, 18, 100, 1, null, false, null, true, false),
  MetallicBoxfish: makeFish($localize`Metallic Boxfish`, Bait.Ragworm, 1, 5, 11, 9, 2, FishType.Boxfish, false, null, false, false),
  LadysCameo: makeFish($localize`Ladys Cameo`, Bait.Ragworm, 1, 12, 22, 15, 2, null, false, [ Weather.Thunder ], false, false),
  Watermoura: makeFish($localize`Watermoura`, Bait.Krill, 1, 10, 18, 41, 2, null, false, [ Weather.Thunderstorms ], false, false),
  LavandinRemora: makeFish($localize`Lavandin Remora`, Bait.Krill, 1, 15, 25, 52, 2, null, false, null, false, false),
  TortoiseshellCrab: makeFish($localize`Tortoiseshell Crab`, Bait.Krill, 2, 6, 12, 10, 2, FishType.Crab, false, null, false, false),
  GoobbueRay: makeFish($localize`Goobbue Ray`, Bait.PlumpWorm, 2, 17, 26, 33, 2, FishType.Manta, false, null, false, false),
  KingCobrafish: makeFish($localize`King Cobrafish`, Bait.PlumpWorm, 3, 6, 12, 39, 2, null, false, null, false, false),
  Mamahimahi: makeFish($localize`Mamahi-mahi`, Bait.PlumpWorm, 3, 24, 29, 58, 2, null, false, null, false, false),
  CieldalaesGeode: makeFish($localize`Cieldalaes Geode`, Bait.Krill, 3, 13, 27, 492, 1, null, false, null, false, true),
  MythrilBoxfish: makeFish($localize`Mythril Boxfish`, Bait.Ragworm, 1, 2, 2, 64, 4, FishType.Boxfish, true, [ Weather.Spectral ], false, false),
  AnomalocarisSaron: makeFish($localize`Anomalocaris Saron`, Bait.Krill, 1, 4, 6, 84, 2, null, true, [ Weather.Spectral ], false, false),
  TitanshellCrab: makeFish($localize`Titanshell Crab`, Bait.Krill, 2, 2, 3, 84, 4, FishType.Crab, true, [ Weather.Spectral ], false, false),
  MistbeardsCup: makeFish($localize`Mistbeards Cup`, Bait.Krill, 2, 4, 5, 84, 2, null, true, [ Weather.Spectral ], false, false),
  JetborneManta: makeFish($localize`Jetborne Manta`, Bait.PlumpWorm, 3, 2, 2, 75, 4, FishType.Manta, true, [ Weather.Spectral ], false, false),
  DevilsSting: makeFish($localize`Devils Sting`, Bait.Krill, 2, 5, 10, 201, 2, null, true, [ Weather.Spectral ], false, false),
  Callichthyid: makeFish($localize`Callichthyid`, Bait.PlumpWorm, 3, 6, 7, 178, 2, null, true, [ Weather.Spectral ], false, false),
  MeanderingMora: makeFish($localize`Meandering Mora`, Bait.PlumpWorm, 2, 7, 12, 283, 2, null, true, [ Weather.Spectral ], false, false),
  FlamingEel: makeFish($localize`Flaming Eel`, Bait.Krill, 2, 6, 9, 198, 2, null, true, [ Weather.Spectral ], false, false),
  Hafgufa: makeFish($localize`Hafgufa`, Bait.SquidStrip, 3, 10, 12, 500, 1, null, true, [ Weather.Spectral ], false, true),
  SpectralEel: makeFish($localize`Spectral Eel`, Bait.Krill, 3, 15, 16, 100, 1, null, false, null, true, false),
  ThaliakCrab: makeFish($localize`Thaliak Crab`, Bait.Ragworm, 1, 3, 8, 9, 2, FishType.Crab, false, null, false, false),
  BlueStitcher: makeFish($localize`Blue Stitcher`, Bait.Krill, 1, 4, 10, 30, 2, null, false, [ Weather.Clouds,Weather.Fog ], false, false),
  StaroftheDestroyer: makeFish($localize`Star of the Destroyer`, Bait.Ragworm, 1, 10, 12, 14, 2, null, false, null, false, false),
  BloodpolishCrab: makeFish($localize`Bloodpolish Crab`, Bait.Ragworm, 1, 17, 25, 28, 4, FishType.Crab, false, null, false, false),
  TrueScad: makeFish($localize`True Scad`, Bait.Krill, 2, 7, 10, 8, 2, null, false, null, false, false),
  BloodedWrasse: makeFish($localize`Blooded Wrasse`, Bait.PlumpWorm, 2, 12, 14, 35, 2, null, false, [ Weather.Showers ], false, false),
  BloodfreshTuna: makeFish($localize`Bloodfresh Tuna`, Bait.PlumpWorm, 2, 16, 20, 43, 2, null, false, null, false, false),
  SunkenMask: makeFish($localize`Sunken Mask`, Bait.Ragworm, 3, 15, 20, 49, 2, null, false, null, false, false),
  Bareface: makeFish($localize`Bareface`, Bait.Krill, 3, 8, 8, 326, 1, null, false, null, false, true),
  SerratedClam: makeFish($localize`Serrated Clam`, Bait.Ragworm, 1, 2, 4, 74, 2, null, true, [ Weather.Spectral ], false, false),
  DravanianBream: makeFish($localize`Dravanian Bream`, Bait.Krill, 1, 3, 4, 77, 2, null, true, [ Weather.Spectral ], false, false),
  BeatificVision: makeFish($localize`Beatific Vision`, Bait.Krill, 2, 2, 2, 77, 4, null, true, [ Weather.Spectral ], false, false),
  GoryTuna: makeFish($localize`Gory Tuna`, Bait.PlumpWorm, 2, 3, 5, 92, 2, null, true, [ Weather.Spectral ], false, false),
  Ticinepomis: makeFish($localize`Ticinepomis`, Bait.PlumpWorm, 3, 3, 4, 92, 2, null, true, [ Weather.Spectral ], false, false),
  QuartzHammerhead: makeFish($localize`Quartz Hammerhead`, Bait.PlumpWorm, 3, 7, 8, 490, 2, FishType.Shark, true, [ Weather.Spectral ], false, false),
  OracularCrab: makeFish($localize`Oracular Crab`, Bait.Ragworm, 1, 2, 3, 102, 4, FishType.Crab, true, [ Weather.Spectral ], false, false),
  Exterminator: makeFish($localize`Exterminator`, Bait.Ragworm, 1, 6, 8, 255, 4, FishType.Crab, true, [ Weather.Spectral ], false, false),
  Skaldminni: makeFish($localize`Skaldminni`, Bait.Krill, 2, 6, 6, 102, 4, FishType.Manta, true, [ Weather.Spectral ], false, false),
  SeafaringToad: makeFish($localize`Seafaring Toad`, Bait.PillBug, 3, 10, 12, 500, 1, null, true, [ Weather.Spectral ], false, true),
  Spectresaur: makeFish($localize`Spectresaur`, Bait.PlumpWorm, 3, 16, 21, 100, 1, null, false, null, true, false),
  CrowPuffer: makeFish($localize`Crow Puffer`, Bait.Ragworm, 1, 3, 7, 10, 2, FishType.Boxfish, false, null, false, false),
  RothlytKelp: makeFish($localize`Rothlyt Kelp`, Bait.Ragworm, 1, 5, 11, 10, 3, null, false, null, false, false),
  HoneycombFish: makeFish($localize`Honeycomb Fish`, Bait.Ragworm, 1, 12, 23, 29, 4, FishType.Boxfish, false, null, false, false),
  LivingLantern: makeFish($localize`Living Lantern`, Bait.Krill, 2, 5, 10, 13, 2, FishType.Jellyfish, false, null, false, false),
  Godsbed: makeFish($localize`Godsbed`, Bait.Ragworm, 2, 16, 26, 29, 2, null, false, null, false, false),
  Lansquenet: makeFish($localize`Lansquenet`, Bait.PlumpWorm, 2, 16, 23, 36, 2, null, false, [ Weather.Thunderstorms ], false, false),
  NephriteEel: makeFish($localize`Nephrite Eel`, Bait.Krill, 2, 15, 25, 44, 2, null, false, null, false, false),
  ThavnairianShark: makeFish($localize`Thavnairian Shark`, Bait.Krill, 3, 12, 14, 44, 2, FishType.Shark, false, null, false, false),
  GinkgoFin: makeFish($localize`Ginkgo Fin`, Bait.Ragworm, 3, 12, 18, 238, 1, null, false, null, false, true),
  RothlytMussel: makeFish($localize`Rothlyt Mussel`, Bait.Ragworm, 1, 3, 3, 72, 2, null, true, [ Weather.Spectral ], false, false),
  CrepeSole: makeFish($localize`Crepe Sole`, Bait.Ragworm, 1, 4, 7, 72, 2, null, true, [ Weather.Spectral ], false, false),
  Trollfish: makeFish($localize`Trollfish`, Bait.Mooch, 1, 3, 5, 202, 2, null, true, [ Weather.Spectral ], false, false),
  LeviElver: makeFish($localize`Levi Elver`, Bait.Krill, 2, 2, 2, 75, 2, null, true, [ Weather.Spectral ], false, false),
  SmoothJaguar: makeFish($localize`Smooth Jaguar`, Bait.PlumpWorm, 2, 4, 5, 70, 2, null, true, [ Weather.Spectral ], false, false),
  Knifejaw: makeFish($localize`Knifejaw`, Bait.Krill, 2, 8, 8, 465, 2, null, true, [ Weather.Spectral ], false, false),
  GarumJug: makeFish($localize`Garum Jug`, Bait.Ragworm, 1, 2, 3, 107, 4, FishType.Boxfish, true, [ Weather.Spectral ], false, false),
  PearlBombfish: makeFish($localize`Pearl Bombfish`, Bait.Mooch, 1, 5, 5, 237, 4, FishType.Boxfish, true, [ Weather.Spectral ], false, false),
  Panoptes: makeFish($localize`Panoptes`, Bait.PlumpWorm, 2, 6, 7, 125, 4, FishType.Manta, true, [ Weather.Spectral ], false, false),
  Placodus: makeFish($localize`Placodus`, Bait.Mooch, 0, 10, 12, 500, 1, null, true, [ Weather.Spectral ], false, true)
};

export const staticLocationData: StaticLocationData[] = [
  {
    location: Location.GaladionBay,
    main: {
      bait: Bait.PlumpWorm,
      fish: [ StaticFish.SpectralMegalodon, StaticFish.TarnishedShark, StaticFish.LeopardEel ]
    },
    spectral: {
      [ TimeOfDay.Day ]: {
        bait: Bait.Ragworm,
        fish: [ StaticFish.CasketOyster, StaticFish.NimbleDancer, StaticFish.Heavenskey ],
      },
      [ TimeOfDay.Sunset ]: {
        bait: Bait.PlumpWorm,
        fish: [ StaticFish.Fishmonger, StaticFish.GhostShark, StaticFish.QuicksilverBlade, StaticFish.FunnelShark ],
      },
      [ TimeOfDay.Night ]: {
        bait: Bait.Krill,
        fish: [ StaticFish.NavigatorsPrint, StaticFish.MermansMane ]
      },
    },
    objectiveFish: [
      StaticFish.CyanOctopus,
      StaticFish.TarnishedShark
    ]
  },
  {
    location: Location.SouthernMerlthor,
    main: {
      bait: Bait.Krill,
      fish: [ StaticFish.SpectralDiscus, StaticFish.MarineBomb, StaticFish.GhoulBarracuda ]
    },
    spectral: {
      [ TimeOfDay.Day ]: {
        bait: Bait.Krill,
        fish: [ StaticFish.CharlatanSurvivor, StaticFish.AzeymasSleeve, StaticFish.MythrilSovereign ],
      },
      [ TimeOfDay.Sunset ]: {
        bait: Bait.Ragworm,
        fish: [ StaticFish.SeaNettle ],
      },
      [ TimeOfDay.Night ]: {
        bait: Bait.PlumpWorm,
        fish: [ StaticFish.HiAetherlouse, StaticFish.ShipwrecksSail, StaticFish.AethericSeadragon ]
      },
    },
    objectiveFish: [
      StaticFish.LaNosceanJelly,
      StaticFish.ShaggySeadragon,
      StaticFish.MarineBomb
    ]
  },
  {
    location: Location.NorthernMerlthor,
    main: {
      bait: Bait.Ragworm,
      fish: [ StaticFish.SpectralSeaBo, StaticFish.Floefish, StaticFish.TossedDagger, StaticFish.ElderDinichthys, StaticFish.OschonsStone, StaticFish.ShootingStar ]
    },
    spectral: {
      [ TimeOfDay.Day ]: {
        bait: Bait.PlumpWorm,
        fish: [ StaticFish.Coccosteus, StaticFish.Gugrusaurus ],
      },
      [ TimeOfDay.Sunset ]: {
        bait: Bait.Ragworm,
        fish: [ StaticFish.CoralSeadragon, StaticFish.ProdigalSon, StaticFish.WildUrchin ],
      },
      [ TimeOfDay.Night ]: {
        bait: Bait.Krill,
        fish: [ StaticFish.Mopbeard, StaticFish.Hammerclaw ]
      },
    },
    objectiveFish: [
      StaticFish.NetCrawler,
      StaticFish.TripodFish
    ]
  },
  {
    location: Location.RhotanoSea,
    main: {
      bait: Bait.PlumpWorm,
      fish: [ StaticFish.SpectralBass, StaticFish.CrimsonMonkfish, StaticFish.OgreEel, StaticFish.ChromeHammerhead ]
    },
    spectral: {
      [ TimeOfDay.Day ]: {
        bait: Bait.PlumpWorm,
        fish: [ StaticFish.DeepseaEel, StaticFish.Sweeper, StaticFish.Executioner ],
      },
      [ TimeOfDay.Sunset ]: {
        bait: Bait.Ragworm,
        fish: [ StaticFish.Slipsnail, StaticFish.Silencer ],
      },
      [ TimeOfDay.Night ]: {
        bait: Bait.Krill,
        fish: [ StaticFish.FloatingSaucer, StaticFish.Aronnax, StaticFish.TrueBarramundi, StaticFish.ProdigalSon ]
      },
    },
    objectiveFish: [
      StaticFish.Lampfish,
      StaticFish.ChromeHammerhead
    ]
  },
  {
    location: Location.Cieldales,
    main: {
      bait: Bait.Ragworm,
      fish: [ StaticFish.SpectralButterfly, StaticFish.MetallicBoxfish, StaticFish.LadysCameo ]
    },
    spectral: {
      [ TimeOfDay.Day ]: {
        bait: Bait.Krill,
        fish: [ StaticFish.DevilsSting, StaticFish.AnomalocarisSaron, StaticFish.TitanshellCrab, StaticFish.MistbeardsCup ],
      },
      [ TimeOfDay.Sunset ]: {
        bait: Bait.PlumpWorm,
        fish: [ StaticFish.MeanderingMora, StaticFish.JetborneManta ],
      },
      [ TimeOfDay.Night ]: {
        bait: Bait.Krill,
        fish: [ StaticFish.MistbeardsCup, StaticFish.TitanshellCrab, StaticFish.AnomalocarisSaron ]
      },
    },
    objectiveFish: [
      StaticFish.MetallicBoxfish,
      StaticFish.TortoiseshellCrab,
      StaticFish.GoobbueRay
    ]
  },
  {
    location: Location.Bloodbrine,
    main: {
      bait: Bait.Krill,
      fish: [ StaticFish.SpectralEel, StaticFish.BlueStitcher, StaticFish.TrueScad, StaticFish.Bareface ]
    },
    spectral: {
      [ TimeOfDay.Day ]: {
        bait: Bait.Ragworm,
        fish: [ StaticFish.SerratedClam, StaticFish.OracularCrab, StaticFish.Exterminator ],
      },
      [ TimeOfDay.Sunset ]: {
        bait: Bait.Krill,
        fish: [ StaticFish.DravanianBream, StaticFish.BeatificVision ],
      },
      [ TimeOfDay.Night ]: {
        bait: Bait.Krill,
        fish: [ StaticFish.DravanianBream, StaticFish.BeatificVision, StaticFish.Skaldminni ]
      },
    },
    objectiveFish: [
      StaticFish.ThaliakCrab,
      StaticFish.BloodpolishCrab
    ]
  },
  {
    location: Location.RothlytSound,
    main: {
      bait: Bait.PlumpWorm,
      fish: [ StaticFish.Spectresaur, StaticFish.Lansquenet ]
    },
    spectral: {
      [ TimeOfDay.Day ]: {
        bait: Bait.Ragworm,
        fish: [ StaticFish.RothlytMussel, StaticFish.CrepeSole, StaticFish.GarumJug, StaticFish.PearlBombfish, StaticFish.Panoptes ],
      },
      [ TimeOfDay.Sunset ]: {
        bait: Bait.Ragworm,
        fish: [ StaticFish.RothlytMussel, StaticFish.CrepeSole, StaticFish.Trollfish, StaticFish.Placodus ],
      },
      [ TimeOfDay.Night ]: {
        bait: Bait.Ragworm,
        fish: [ StaticFish.RothlytMussel, StaticFish.CrepeSole, StaticFish.GarumJug, StaticFish.PearlBombfish ],
      },
    },
    objectiveFish: [
      StaticFish.CrowPuffer,
      StaticFish.HoneycombFish,
      StaticFish.LivingLantern,
      StaticFish.ThavnairianShark
    ]
  },
];
