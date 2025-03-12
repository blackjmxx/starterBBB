import React from "react";
import {
  Heading as RACHeading,
  HeadingProps as RACHeadingProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { FocusScope } from "react-aria";
import { DisplayLevel, displayLevels } from "./utils";

/**
 * Props de base pour les composants de titre
 */
type BaseHeadingProps = {
  /** Niveau d'affichage pour la taille du texte */
  displayLevel?: DisplayLevel;
  /** Si true, le titre recevra automatiquement le focus */
  autoFocus?: boolean;
};

/**
 * Props pour le composant Heading
 */
export type HeadingProps = {
  /** Niveau de titre (h1-h6) */
  level?: DisplayLevel;
  /** Ne pas utiliser avec level */
  elementType?: never;
} & RACHeadingProps;

/**
 * Props pour utiliser un élément div comme titre
 */
type CustomElement = {
  /** Ne pas utiliser avec elementType */
  level?: never;
  /** Type d'élément à utiliser */
  elementType: "div";
} & React.JSX.IntrinsicElements["div"];

/**
 * Composant de titre avec différents niveaux et styles
 *
 * @example
 * <Heading level={1}>Titre principal</Heading>
 *
 * @example
 * <Heading level={2} displayLevel={1}>Titre secondaire avec style de niveau 1</Heading>
 */
export const Heading = React.forwardRef<
  HTMLHeadingElement | HTMLDivElement,
  BaseHeadingProps & (HeadingProps | CustomElement)
>(function Heading({ elementType, autoFocus, ...props }, ref) {
  if (elementType) {
    const { displayLevel = 1, className, ...restProps } = props;

    if (autoFocus) {
      return (
        <FocusScope autoFocus>
          <div
            {...restProps}
            ref={ref}
            {...(autoFocus && { tabIndex: -1 })}
            className={twMerge(
              [displayLevels[displayLevel], "outline-none"],
              className
            )}
          />
        </FocusScope>
      );
    }
    return (
      <div
        {...restProps}
        ref={ref}
        className={twMerge(displayLevels[displayLevel], className)}
      />
    );
  }

  const { level = 1, displayLevel, className, ...restProps } = props;

  if (autoFocus) {
    return (
      <FocusScope autoFocus>
        <RACHeading
          {...restProps}
          ref={ref}
          level={level}
          {...(autoFocus && { tabIndex: -1 })}
          className={twMerge(
            [displayLevels[displayLevel ?? level], "outline-none"],
            className
          )}
        />
      </FocusScope>
    );
  }

  return (
    <RACHeading
      {...restProps}
      ref={ref}
      level={level}
      className={twMerge(displayLevels[displayLevel ?? level], className)}
    />
  );
});

/**
 * Sous-titre avec style prédéfini
 *
 * @example
 * <SubHeading>Texte explicatif sous le titre principal</SubHeading>
 */
export const SubHeading = React.forwardRef<
  HTMLDivElement,
  React.JSX.IntrinsicElements["div"]
>(function SubHeading({ className, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className={twMerge("text-base text-muted sm:text-sm/6", className)}
    />
  );
});
