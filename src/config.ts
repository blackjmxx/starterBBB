import packageJson from '../package.json';

export type ConfigValue = {
  site: {
    name: string;
    serverUrl: string;
    assetURL: string;
    basePath: string;
    version: string;
  };
  auth: {
    method: 'jwt';
    skip: boolean;
    redirectPath: string;
  };
};

export const CONFIG: ConfigValue = {
  site: {
    name: 'Arkyt',
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
    assetURL: process.env.NEXT_PUBLIC_ASSET_URL ?? '',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
    version: packageJson.version,
  },
  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: '/dashboard',
  },
}; 