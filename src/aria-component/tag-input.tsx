import React from "react";
import { LabelContext, TextFieldProps, type Key } from "react-aria-components";
import { Tag, TagGroup, TagList } from "./tag-group";
import { ListData } from "react-stately";
import { Input, TextField } from "./field";
import { twMerge } from "tailwind-merge";

/**
 * Interface pour un élément de tag
 */
interface TagItem {
  id: number;
  name: string;
}

/**
 * Contexte pour partager les données entre les composants de TagInput
 */
interface ContextType {
  list: ListData<TagItem>;
  onTagAdd?: (tag: TagItem) => void;
  onTagRemove?: (tag: TagItem) => void;
}

const TagInputContext = React.createContext<ContextType | null>(null);

/**
 * Hook pour accéder au contexte de TagInput
 */
function useTagInputContext() {
  const context = React.useContext(TagInputContext);

  if (!context) {
    throw new Error("<TagInputContext.Provider> is required");
  }

  return context;
}

/**
 * Props pour le composant TagsInputField
 */
export interface TagInputProps
  extends Omit<ContextType, "tagGroupId">,
    TextFieldProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Champ de formulaire pour la saisie de tags
 *
 * @example
 * <TagsInputField list={listData}>
 *   <Label>Tags</Label>
 *   <TagsInput />
 *   <FieldError />
 * </TagsInputField>
 */
export function TagsInputField({
  list,
  name,
  onTagRemove,
  onTagAdd,
  ...props
}: TagInputProps) {
  return (
    <TagInputContext.Provider value={{ list, onTagAdd, onTagRemove }}>
      <TextField {...props} />
      {name && (
        <input
          name={name}
          hidden
          readOnly
          value={list.items.map(({ name }) => name).join(",")}
        />
      )}
    </TagInputContext.Provider>
  );
}

/**
 * Composant pour la saisie de tags avec auto-complétion
 *
 * @example
 * <TagsInput />
 */
export function TagsInput({
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [inputValue, setInputValue] = React.useState("");
  const { list, onTagAdd, onTagRemove } = useTagInputContext();

  /**
   * Supprime le dernier tag de la liste
   */
  const deleteLast = React.useCallback(() => {
    if (list.items.length == 0) {
      return;
    }

    const lastKey = list.items[list.items.length - 1];

    if (lastKey !== null) {
      list.remove(lastKey.id);
      const item = list.getItem(lastKey.id);

      if (item) {
        onTagRemove?.(item);
      }
    }
  }, [list, onTagRemove]);

  /**
   * Gère les événements clavier pour ajouter ou supprimer des tags
   */
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === "," || e.key === ";") {
      e.preventDefault();
      addTag();
    }

    if (e.key === "Backspace" && inputValue === "") {
      deleteLast();
    }
  }

  /**
   * Ajoute un ou plusieurs tags à partir de la valeur d'entrée
   */
  function addTag() {
    const tagNames = inputValue.split(/[,;]/);

    tagNames.forEach((tagName) => {
      const formattedName = tagName
        .trim()
        .replace(/\s\s+/g, " ")
        .replace(/\t|\\t|\r|\\r|\n|\\n/g, "");

      if (formattedName === "") {
        return;
      }

      const hasTagExists = list.items.find(
        ({ name }) =>
          name.toLocaleLowerCase() === formattedName.toLocaleLowerCase()
      );

      if (!hasTagExists) {
        const tag = {
          id: (list.items.at(-1)?.id || 0) + 1,
          name: formattedName,
        };

        list.append(tag);
        onTagAdd?.(tag);
      }
    });

    setInputValue("");
  }

  /**
   * Gère la suppression d'un tag
   */
  function handleRemove(keys: Set<Key>) {
    const keysArray = Array.from(keys);
    list.remove(...keysArray);
    const item = list.getItem(keysArray[0]);

    if (item) {
      onTagRemove?.(item);
    }
  }

  const { id: labelId } = (React.useContext(LabelContext) ?? {}) as {
    id?: string;
  };

  return (
    <TagGroup
      aria-labelledby={labelId}
      onRemove={handleRemove}
      className={twMerge(className, "w-full")}
      data-ui="control"
    >
      <div
        className={twMerge(
          "flex min-h-9 items-center rounded-md",
          "border has-[input[data-focused=true]]:border-blue-500",
          "has-[input[data-invalid=true][data-focused=true]]:border-blue-500 has-[input[data-invalid=true]]:border-destructive",
          "has-[input[data-focused=true]]:ring-1 has-[input[data-focused=true]]:ring-blue-500"
        )}
      >
        <div className="inline-flex flex-1 flex-wrap items-center gap-1 px-2 py-[5px]">
          <TagList items={list.items} className="contents">
            {(item) => <Tag>{item.name}</Tag>}
          </TagList>

          <div className="flex flex-1">
            <Input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              className="border-0 px-0.5 py-0 focus:ring-0 sm:py-0"
            />
          </div>
        </div>
      </div>
    </TagGroup>
  );
}
