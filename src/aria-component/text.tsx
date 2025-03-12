import { LinkProps, TextProps } from "react-aria-components";
import { Link } from "./link";
import { twMerge } from "tailwind-merge";
import React from "react";
import { composeTailwindRenderProps } from "./utils";

/**
 * Composant de texte de base
 *
 * @example
 * <Text>Texte standard</Text>
 *
 * @example
 * <Text elementType="span">Texte en span</Text>
 */
export function Text({
  className,
  elementType,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    elementType ?? "p",
    {
      ...props,
      className: twMerge(
        "text-pretty text-base text-muted sm:text-sm/6",
        className
      ),
    },
    children
  );
}

/**
 * Texte en gras
 *
 * @example
 * <Strong>Texte important</Strong>
 */
export function Strong({
  className,
  ...props
}: React.JSX.IntrinsicElements["strong"]) {
  return (
    <Text
      {...props}
      elementType="strong"
      className={twMerge("font-medium text-foreground", className)}
    />
  );
}

/**
 * Texte de petite taille
 *
 * @example
 * <Small>Texte secondaire</Small>
 */
export function Small({
  className,
  ...props
}: React.JSX.IntrinsicElements["small"]) {
  return (
    <Text
      {...props}
      elementType="small"
      className={twMerge("text-sm sm:text-xs", className)}
    />
  );
}

/**
 * Lien textuel
 *
 * @example
 * <TextLink href="/page">Lien vers une page</TextLink>
 */
export function TextLink(props: LinkProps) {
  return (
    <Link
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "underline underline-offset-4"
      )}
    />
  );
}
