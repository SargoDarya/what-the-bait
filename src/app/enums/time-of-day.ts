export enum TimeOfDay {
  Day,
  Sunset,
  Night
}

export const TimeOfDayTranslation = new Map([
  [ TimeOfDay.Day, $localize`Day` ],
  [ TimeOfDay.Sunset, $localize`Sunset` ],
  [ TimeOfDay.Night, $localize`Night` ]
]);
