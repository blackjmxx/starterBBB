import { MoveLeft, MoveRight, Search } from 'lucide-react';
import { Key, useRef, useState } from 'react';
import {
  Button,
  ButtonProps,
  ListBox,
  ListBoxItem,
  ListBoxProps
} from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { Label } from './field';
import { composeTailwindRenderProps } from './utils';

export interface TransferListItem {
  id: Key;
  name: string;
}

type HTMLDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isDisabled?: boolean;
  className?: string;
}

export interface TransferListProps extends Omit<ListBoxProps<TransferListItem>, 'children'> {
  sourceItems: TransferListItem[];
  targetItems: TransferListItem[];
  onItemsChange: (targetItems: TransferListItem[]) => void;
  allowSearch?: boolean;
  searchPlaceholder?: string;
  sourceLabel?: string;
  targetLabel?: string;
  className?: string;
  searchFieldProps?: Partial<SearchFieldProps>;
  actionButtonProps?: Partial<ButtonProps>;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

const extractHTMLProps = (props: any): HTMLDivProps => {
  const {
    sourceItems,
    targetItems,
    onItemsChange,
    allowSearch,
    searchPlaceholder,
    sourceLabel,
    targetLabel,
    searchFieldProps,
    actionButtonProps,
    isDisabled,
    isReadOnly,
    selectedKeys,
    onSelectionChange,
    ...htmlProps
  } = props;
  return htmlProps;
};

const SearchField = ({
  value,
  onChange,
  placeholder,
  isDisabled,
  className,
  ...props
}: SearchFieldProps) => (
  <div className="relative">
    <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
    <input
      type="search"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={isDisabled}
      className={twMerge(
        "w-full pl-9 pr-3 py-2 rounded-md border",
        "bg-background text-foreground",
        "placeholder:text-muted-foreground",
        "focus:outline-none focus:ring-2 focus:ring-ring",
        "disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  </div>
);

export function TransferList({
  sourceItems = [],
  targetItems = [],
  onItemsChange,
  allowSearch = false,
  searchPlaceholder = "Rechercher...",
  sourceLabel = "Source",
  targetLabel = "Destination",
  className,
  searchFieldProps = {},
  actionButtonProps,
  selectedKeys = new Set(),
  onSelectionChange,
  isDisabled = false,
  isReadOnly = false,
  ...props
}: TransferListProps) {
  const [sourceSearchValue, setSourceSearchValue] = useState('');
  const [targetSearchValue, setTargetSearchValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredSourceItems = (sourceItems || []).filter(item => 
    !sourceSearchValue || item.name.toLowerCase().includes(sourceSearchValue.toLowerCase())
  );

  const filteredTargetItems = (targetItems || []).filter(item => 
    !targetSearchValue || item.name.toLowerCase().includes(targetSearchValue.toLowerCase())
  );

  const selectedKeysArray = selectedKeys instanceof Set 
    ? Array.from(selectedKeys) 
    : Array.isArray(selectedKeys) 
      ? selectedKeys 
      : [];

  const moveToTarget = () => {
    if (isDisabled || isReadOnly) return;
    const itemsToMove = sourceItems.filter(item => selectedKeysArray.includes(item.id));
    const newTargetItems = [...targetItems, ...itemsToMove];
    onItemsChange(newTargetItems);
    onSelectionChange?.(new Set());
  };

  const moveToSource = () => {
    if (isDisabled || isReadOnly) return;
    const newTargetItems = targetItems.filter(item => !selectedKeysArray.includes(item.id));
    onItemsChange(newTargetItems);
    onSelectionChange?.(new Set());
  };

  const listClassName = "outline-none rounded-md p-1 gap-1 overflow-auto h-full";
  const htmlProps = extractHTMLProps(props);

  const searchFieldPropsWithDefaults: SearchFieldProps = {
    value: '',
    onChange: () => {},
    placeholder: searchPlaceholder,
    isDisabled,
    ...searchFieldProps
  };

  return (
    <div
      ref={containerRef}
      className={twMerge("flex flex-col gap-4", className)}
      {...htmlProps}
    >
      <div className="flex gap-4">
        {/* Source List */}
        <div className="flex-1 flex flex-col gap-2">
          <Label>{sourceLabel}</Label>
          {allowSearch && (
            <SearchField
              {...searchFieldPropsWithDefaults}
              value={sourceSearchValue}
              onChange={setSourceSearchValue}
              placeholder={searchPlaceholder}
              isDisabled={isDisabled}
            />
          )}
          <div className={twMerge(
            "min-h-[300px] border rounded-md",
            isDisabled && "opacity-50 pointer-events-none"
          )}>
            <ListBox<TransferListItem>
              aria-label={sourceLabel}
              selectionMode="multiple"
              selectedKeys={selectedKeys}
              onSelectionChange={onSelectionChange}
              className={listClassName}
              disallowEmptySelection
              items={filteredSourceItems}
            >
              {item => (
                <ListBoxItem
                  key={item.id}
                  textValue={item.name}
                  className="px-2 py-1.5 rounded-sm cursor-pointer outline-none data-[selected]:bg-accent data-[selected]:text-accent-foreground data-[focused]:bg-accent/50"
                >
                  {item.name}
                </ListBoxItem>
              )}
            </ListBox>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-2">
          <Button
            onPress={moveToTarget}
            isDisabled={isDisabled || isReadOnly || selectedKeysArray.length === 0}
            className={composeTailwindRenderProps(
              actionButtonProps?.className,
              [
                'p-2 rounded-md border',
                'hover:bg-accent hover:text-accent-foreground',
                'focus:outline-none focus-visible:ring-2',
                'disabled:opacity-50 disabled:pointer-events-none'
              ].join(' ')
            )}
            {...actionButtonProps}
          >
            <MoveRight className="w-4 h-4" />
          </Button>
          <Button
            onPress={moveToSource}
            isDisabled={isDisabled || isReadOnly || selectedKeysArray.length === 0}
            className={composeTailwindRenderProps(
              actionButtonProps?.className,
              [
                'p-2 rounded-md border',
                'hover:bg-accent hover:text-accent-foreground',
                'focus:outline-none focus-visible:ring-2',
                'disabled:opacity-50 disabled:pointer-events-none'
              ].join(' ')
            )}
            {...actionButtonProps}
          >
            <MoveLeft className="w-4 h-4" />
          </Button>
        </div>

        {/* Target List */}
        <div className="flex-1 flex flex-col gap-2">
          <Label>{targetLabel}</Label>
          {allowSearch && (
            <SearchField
              {...searchFieldPropsWithDefaults}
              value={targetSearchValue}
              onChange={setTargetSearchValue}
              placeholder={searchPlaceholder}
              isDisabled={isDisabled}
            />
          )}
          <div className={twMerge(
            "min-h-[300px] border rounded-md",
            isDisabled && "opacity-50 pointer-events-none"
          )}>
            <ListBox<TransferListItem>
              aria-label={targetLabel}
              selectionMode="multiple"
              selectedKeys={selectedKeys}
              onSelectionChange={onSelectionChange}
              className={listClassName}
              disallowEmptySelection
              items={filteredTargetItems}
            >
              {item => (
                <ListBoxItem
                  key={item.id}
                  textValue={item.name}
                  className="px-2 py-1.5 rounded-sm cursor-pointer outline-none data-[selected]:bg-accent data-[selected]:text-accent-foreground data-[focused]:bg-accent/50"
                >
                  {item.name}
                </ListBoxItem>
              )}
            </ListBox>
          </div>
        </div>
      </div>
    </div>
  );
}