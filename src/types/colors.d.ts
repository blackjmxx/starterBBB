export interface Theme {
  name: string;
  colors: string[];
}

export interface ColorConfig {
  themes: Theme[];
  activeTheme: string;
} 