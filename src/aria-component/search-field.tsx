import {
  InputProps,
  Group,
  SearchField as RACSearchField,
  SearchFieldProps as RACSearchFieldProps,
} from "react-aria-components";
import { composeTailwindRenderProps, inputField } from "./utils";
import { Button } from "./button";
import { Input } from "./field";
import { SearchIcon, XIcon } from "./icons";

/**
 * Props pour le composant SearchField
 */
export interface SearchFieldProps extends RACSearchFieldProps {}

/**
 * Champ de recherche avec icône et bouton d'effacement
 *
 * @example
 * <SearchField>
 *   <Label>Rechercher</Label>
 *   <SearchInput placeholder="Rechercher..." />
 * </SearchField>
 *
 * @example
 * <SearchField defaultValue="texte initial">
 *   <Label>Rechercher des produits</Label>
 *   <SearchInput />
 *   <FieldError />
 * </SearchField>
 */
export function SearchField(props: SearchFieldProps) {
  return (
    <RACSearchField
      {...props}
      className={composeTailwindRenderProps(props.className, inputField)}
    ></RACSearchField>
  );
}

/**
 * Champ de saisie pour la recherche avec icônes
 *
 * @example
 * <SearchInput placeholder="Rechercher..." />
 */
export function SearchInput(props: InputProps) {
  return (
    <Group
      data-ui="control"
      className={[
        "isolate",
        "grid",
        "grid-cols-[calc(theme(size.5)+20px)_1fr_calc(theme(size.5)+20px)]",
        "sm:grid-cols-[calc(theme(size.4)+20px)_1fr_calc(theme(size.4)+20px)]",
      ].join(" ")}
    >
      <SearchIcon className="col-start-1 row-start-1 size-5 place-self-center text-muted sm:size-4 z-10" />

      <Input
        {...props}
        className={composeTailwindRenderProps(props.className, [
          "[&::-webkit-search-cancel-button]:hidden",
          "col-span-full",
          "row-start-1",
          "pe-10",
          "sm:pe-9",
          "ps-10",
          "sm:ps-8",
        ])}
      />
      <Button
        isIconOnly
        variant="plain"
        size="sm"
        className="group-empty-invisible -col-end-1 row-start-1 place-self-center group-empty:invisible"
      >
        <XIcon aria-label="Clear" />
      </Button>
    </Group>
  );
}
