import {
  DatePicker,
  DatePickerButton,
  DatePickerInput,
} from '@/aria-component/date-picker';
import { Description, FieldError, Label } from '@/aria-component/field';
import { Form } from '@/aria-component/form';
import {
  getLocalTimeZone,
  isWeekend,
  parseDate,
  today,
} from '@internationalized/date';
import React from 'react';
import { useLocale } from 'react-aria-components';

const DatePickerDemo: React.FC = () => {
  const now = today(getLocalTimeZone());
  const { locale } = useLocale();

  // Example of disabled dates (weekends and specific ranges)
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
  ];

  const isDateUnavailable = (date: any) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
    );

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">DatePicker Demo</h2>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Basique</h3>
        <div className="max-w-md">
          <DatePicker>
            <Label>Date de l'événement</Label>
            <DatePickerInput />
          </DatePicker>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Avec description</h3>
        <div className="space-y-4 max-w-md">
          <DatePicker>
            <Label>Date de l'événement</Label>
            <Description>Veuillez sélectionner une date</Description>
            <DatePickerInput />
          </DatePicker>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">États</h3>
        <div className="space-y-4 max-w-md">
          <DatePicker isDisabled>
            <Label>Désactivé</Label>
            <DatePickerInput />
          </DatePicker>

          <DatePicker isReadOnly>
            <Label>Lecture seule</Label>
            <DatePickerInput />
          </DatePicker>

          <Form>
            <DatePicker isRequired>
              <Label>Requis</Label>
              <DatePickerInput />
              <FieldError />
            </DatePicker>
          </Form>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Variantes</h3>
        <div className="space-y-4 max-w-md">
          <DatePicker
            minValue={today(getLocalTimeZone())}
            defaultValue={parseDate(
              today(getLocalTimeZone()).subtract({ days: 1 }).toString(),
            )}
          >
            <Label>Date minimale (aujourd'hui)</Label>
            <DatePickerInput />
          </DatePicker>

          <DatePicker
            isDateUnavailable={isDateUnavailable}
            validationBehavior="native"
          >
            <Label>Dates indisponibles</Label>
            <Description>Weekends et certaines dates sont désactivés</Description>
            <DatePickerInput />
          </DatePicker>

          <DatePicker defaultValue={today(getLocalTimeZone())}>
            <Label>Avec bouton</Label>
            <DatePickerButton>Sélectionner une date</DatePickerButton>
          </DatePicker>
        </div>
      </div>
    </div>
  );
};

export default DatePickerDemo;