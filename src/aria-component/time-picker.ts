import React from "react";

/**
 * Option de temps pour le sélecteur d'heure
 */
export type TimeOption = {
  /** Heure (0-23) */
  hour: number;
  /** Minute (0-59) */
  minute: number;
  /** Valeur formatée (ex: "2:30 PM") */
  value: string;
  /** Identifiant unique */
  id: string;
};

/**
 * Hook pour générer des options de temps à intervalles réguliers
 *
 * @param intervalInMinute - Intervalle en minutes (15 ou 30)
 * @returns Liste d'options de temps
 *
 * @example
 * const timeOptions = useTimePicker({ intervalInMinute: 15 });
 * // Retourne des options comme "12:00 AM", "12:15 AM", "12:30 AM", etc.
 */
export function useTimePicker({
  intervalInMinute,
}: {
  intervalInMinute: 15 | 30;
}): Array<TimeOption> {
  return React.useMemo(() => {
    const options = [];

    for (let hour = 0; hour < 24; hour++) {
      const period = hour >= 12 ? "PM" : "AM";
      let hourIn12Format = hour % 12;

      if (hourIn12Format === 0) {
        hourIn12Format = 12;
      }

      for (
        let interval = 0;
        interval < Math.floor(60 / intervalInMinute);
        interval++
      ) {
        const minutes = interval * intervalInMinute;
        options.push({
          hour,
          minute: minutes,
          value: `${hourIn12Format}:${
            minutes === 0 ? "00" : minutes
          } ${period}`,
          id: `${hourIn12Format}:${minutes === 0 ? "00" : minutes} ${period}`,
        });
      }
    }

    return options;
  }, [intervalInMinute]);
}

/**
 * Calcule la minute arrondie la plus proche selon un intervalle
 *
 * @param intervalInMinute - Intervalle en minutes
 * @param minute - Minute actuelle
 * @returns Différence en minutes pour atteindre la prochaine minute arrondie
 *
 * @example
 * getRoundMinute({ intervalInMinute: 15, minute: 7 })
 * // Retourne 8 (pour arrondir à 15)
 */
export function getRoundMinute({
  intervalInMinute,
  minute,
}: {
  intervalInMinute: number;
  minute: number;
}) {
  const closeMinute = Array(60 / intervalInMinute + 1)
    .fill(0)
    .map((_, i) => {
      return intervalInMinute * i;
    })
    .find((i) => {
      return i > minute;
    });

  if (closeMinute) {
    return closeMinute - minute;
  }

  return 0;
}
