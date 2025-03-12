import {
  Slider as RACSlider,
  SliderProps as RACSliderProps,
  SliderThumb,
  SliderTrack as RACSliderTrack,
  SliderRenderProps,
} from "react-aria-components";
import { composeTailwindRenderProps, focusVisibleOutline } from "./utils";
import { twMerge } from "tailwind-merge";

export { SliderOutput } from "react-aria-components";

/**
 * Props pour le composant Slider
 */
export interface SliderProps<T> extends RACSliderProps<T> {
  /** Libellé du slider */
  label?: string;
  /** Libellés pour chaque poignée du slider */
  thumbLabels?: string[];
}

/**
 * Curseur interactif pour sélectionner une valeur ou une plage de valeurs
 *
 * @example
 * <Slider label="Volume" defaultValue={50} />
 *
 * @example
 * <Slider
 *   label="Plage de prix"
 *   defaultValue={[20, 80]}
 *   thumbLabels={["Min", "Max"]}
 *   formatOptions={{ style: 'currency', currency: 'EUR' }}
 * />
 */
export function Slider<T extends number | number[]>(props: SliderProps<T>) {
  return (
    <RACSlider
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-2 orientation-horizontal:min-w-64 orientation-vertical:items-center"
      )}
    />
  );
}

/**
 * Styles pour la piste du slider
 */
const trackStyle = [
  "absolute top-[50%] translate-y-[-50%] rounded-full",
  "group-orientation-horizontal:h-1",
  "group-orientation-horizontal:w-full",
  "group-orientation-vertical:left-[50%]",
  "group-orientation-vertical:h-full",
  "group-orientation-vertical:w-[6px]",
  "group-orientation-vertical:translate-x-[-50%]",
  "group-orientation-vertical:translate-y-[-50%]",
  "group-disabled:opacity-50",
];

/**
 * Piste du slider avec mise en évidence de la partie sélectionnée
 */
export function SliderTrack() {
  return (
    <RACSliderTrack
      className={({ orientation }) => {
        return twMerge(trackStyle, "group");
      }}
    >
      {({ state, orientation }) => {
        return (
          <>
            <div
              className={twMerge("bg-zinc-200 dark:bg-zinc-300", trackStyle)}
            />
            <div
              className={twMerge("bg-accent", trackStyle)}
              style={getTrackHighlightStyle(state, orientation)}
            />
            {state.values.map((_, i) => (
              <SliderThumb
                key={i}
                index={i}
                aria-label={String(state.values[i])}
                className={composeTailwindRenderProps("", [
                  "size-5 rounded-full bg-white shadow-xl ring ring-1 ring-zinc-400/45 dark:ring-0",
                  "group-orientation-horizontal:top-[50%] group-orientation-vertical:left-[50%]",
                  "dragging:ring-accent dragging:border-8 dragging:border-accent",
                  "disabled:cursor-not-allowed",
                  focusVisibleOutline,
                ])}
              />
            ))}
          </>
        );
      }}
    </RACSliderTrack>
  );
}

/**
 * Calcule le style de mise en évidence de la piste du slider
 */
function getTrackHighlightStyle(
  state: SliderRenderProps["state"],
  orientation: SliderRenderProps["orientation"]
) {
  const hasTwoThumbs = state.values.length == 2;
  const highlightPercentage = hasTwoThumbs
    ? (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + "%"
    : state.getThumbPercent(0) * 100 + "%";
  const highlightStartPosition = hasTwoThumbs
    ? state.getThumbPercent(0) * 100 + "%"
    : "0";

  return orientation === "horizontal"
    ? {
        width: highlightPercentage,
        left: highlightStartPosition,
      }
    : {
        height: highlightPercentage,
        bottom: highlightStartPosition,
        top: "auto",
        transform: "translate(-50%,0px)",
      };
}
