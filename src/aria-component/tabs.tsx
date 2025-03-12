import React from "react";
import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps as RACTabProps,
} from "react-aria-components";
import { composeTailwindRenderProps, focusVisibleRing } from "./utils";

/**
 * Contexte pour partager les propriétés entre les composants de tabs
 */
const TabsContext = React.createContext<{
  variant: "underline" | "pills" | "segment";
  orientation: "vertical" | "horizontal";
}>({
  variant: "underline",
  orientation: "horizontal",
});

/**
 * Props pour le composant Tabs
 */
export type TabsProps = RACTabProps &
  (
    | { variant?: "underline" | "pills" }
    | { variant: "segment"; orientation?: never }
  );

/**
 * Composant d'onglets pour organiser le contenu
 *
 * @example
 * <Tabs>
 *   <TabList aria-label="Exemple d'onglets">
 *     <Tab id="tab1">Onglet 1</Tab>
 *     <Tab id="tab2">Onglet 2</Tab>
 *     <Tab id="tab3">Onglet 3</Tab>
 *   </TabList>
 *   <TabPanel id="tab1">Contenu de l'onglet 1</TabPanel>
 *   <TabPanel id="tab2">Contenu de l'onglet 2</TabPanel>
 *   <TabPanel id="tab3">Contenu de l'onglet 3</TabPanel>
 * </Tabs>
 *
 * @example
 * <Tabs variant="pills">
 *   <TabList>
 *     <Tab id="tab1">Onglet 1</Tab>
 *     <Tab id="tab2">Onglet 2</Tab>
 *   </TabList>
 *   <TabPanel id="tab1">Contenu de l'onglet 1</TabPanel>
 *   <TabPanel id="tab2">Contenu de l'onglet 2</TabPanel>
 * </Tabs>
 */
export function Tabs({
  variant = "underline",
  orientation = "horizontal",
  keyboardActivation = "manual",
  ...props
}: TabsProps) {
  return (
    <TabsContext.Provider value={{ variant, orientation }}>
      <RACTabs
        {...props}
        keyboardActivation={keyboardActivation}
        orientation={orientation}
        className={composeTailwindRenderProps(props.className, [
          "group flex",
          orientation === "horizontal" ? "flex-col" : "flex-col sm:flex-row",
        ])}
      />
    </TabsContext.Provider>
  );
}

/**
 * Liste d'onglets
 *
 * @example
 * <TabList aria-label="Navigation">
 *   <Tab id="tab1">Accueil</Tab>
 *   <Tab id="tab2">Profil</Tab>
 * </TabList>
 */
export function TabList<T extends object & { title: string }>(
  props: TabListProps<T>
) {
  const { variant, orientation } = React.useContext(TabsContext);

  return (
    <div className="flex overflow-x-auto pb-px pl-px">
      <RACTabList
        {...props}
        className={composeTailwindRenderProps(props.className, [
          "flex",
          "text-base/6 sm:text-sm/6",
          tabList.base[orientation],
          tabList[variant][orientation],
        ])}
      />
    </div>
  );
}

/**
 * Styles pour les panneaux d'onglets
 */
const tabPanel = {
  underline: {
    horizontal: ["py-4"],
    vertical: ["px-4"],
  },
  pills: {
    horizontal: ["px-5 py-4"],
    vertical: ["p-4 sm:pl-8 sm:py-0"],
  },
  segment: {
    horizontal: ["px-3 py-4"],
    vertical: [],
  },
};

/**
 * Panneau de contenu pour un onglet
 *
 * @example
 * <TabPanel id="tab1">
 *   Contenu de l'onglet 1
 * </TabPanel>
 */
export function TabPanel(props: TabPanelProps) {
  const { variant, orientation } = React.useContext(TabsContext);

  return (
    <RACTabPanel
      {...props}
      className={composeTailwindRenderProps(props.className, [
        "flex-1 outline-0",
        tabPanel[variant][orientation],
      ])}
    />
  );
}

/**
 * Styles pour les différentes variantes de listes d'onglets
 */
const tabList = {
  base: {
    horizontal: ["whitespace-nowrap"],
    vertical: ["flex-col flex-1 sm:flex-initial"],
  },
  underline: {
    horizontal: ["w-full space-x-4 border-b"],
    vertical: ["space-y-3.5 self-start border-l"],
  },
  pills: {
    horizontal: ["space-x-4"],
    vertical: ["space-y-2"],
  },
  segment: {
    horizontal: [
      "gap-x-4",
      "p-1",
      "rounded-md",
      "bg-zinc-100",
      "dark:bg-zinc-600/45",
    ],
    vertical: [],
  },
};

/**
 * Styles pour les différentes variantes d'onglets
 */
const TabStyles = {
  underline: {
    base: [
      "py-2 px-1 -mb-px",
      "text-muted",
      "border-b-2 border-transparent",
      "selected:text-foreground",
      "selected:border-accent",
      "[&>[data-ui=icon]:not([class*=size-])]:size-4",
    ],
    horizontal: [],
    vertical: [
      "py-1 px-2 -mr-px",
      "border-b-0 border-r-2",
      "selected:border-accent",
    ],
  },
  pills: {
    base: [
      "py-1.5 px-3 rounded-md",
      "selected:bg-accent",
      "selected:text-white",
      "[&>[data-ui=icon]:not([class*=size-])]:size-4",
    ],
    horizontal: ["px-5 py-4"],
    vertical: ["p-4 sm:pl-8 sm:py-0"],
  },
  segment: {
    base: [
      "py-1.5 px-3",
      "selected:bg-white",
      "selected:dark:bg-zinc-900",
      "selected:shadow-sm",
      "selected:rounded-[calc(theme(borderRadius.md)-2px)]",
      "[&>[data-ui=icon]:not([class*=size-])]:size-4",
    ],
    horizontal: ["px-3 py-4"],
    vertical: [],
  },
};

/**
 * Onglet individuel
 *
 * @example
 * <Tab id="tab1">Accueil</Tab>
 *
 * @example
 * <Tab id="tab2" isDisabled>Profil</Tab>
 */
export function Tab(props: TabProps) {
  const { variant, orientation } = React.useContext(TabsContext);

  return (
    <RACTab
      {...props}
      className={composeTailwindRenderProps(props.className, [
        "relative flex items-center gap-x-3 rounded font-medium outline-none outline-0",
        // disable
        "disabled:opacity-50",

        "[&>[data-ui=icon]:not([class*=size-])]:size-5",

        // hover
        "[&:not([data-selected])]:text-muted",
        "[&:not([data-selected])]:hover:text-foreground",

        TabStyles[variant].base,
        TabStyles[variant][orientation],
        focusVisibleRing,
        "focus-visible:ring-2",
      ])}
    />
  );
}
