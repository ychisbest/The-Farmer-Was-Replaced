// locales settings for this theme
// Set the languages you want to support on your site.
// https://astro-i18n-starter.pages.dev/setup/

import setting from '../Setting.json';

export const DEFAULT_LOCALE_SETTING: string = setting.DEFAULT_LOCALE_SETTING;

interface LocaleSetting {
  [key: Lowercase<string>]: {
	label: string;
	lang?: string;
	dir?: "rtl" | "ltr";
  };
} // refer: https://starlight.astro.build/reference/configuration/#locales

export const LOCALES_SETTING: LocaleSetting = setting.LOCALES_SETTING;
