import { typography, radius, spacing } from '../foundations';

export type OptionsTheme = 'light' | 'dark';

export type Theme = {
  title: OptionsTheme;

  typography: typeof typography;
  spacing: typeof spacing;
  radius: typeof radius;

  colors: {
    backgrounds: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    shapes: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };

    borders: {
      primary: string;
    };

    texts: {
      heading: {
        primary: string;
      };

      complementary: {
        body: string;
        placeholder: string;
        details: string;
        button: string;
        links: string;
      };
    };

    buttons: {
      solid: {
        primary: {
          enabled: string;
          disabled: string;
          loading: string;
        };
      };
    };

    icons: {
      primary: string;
      secondary: string;
    };

    semantic: {
      success: string;
      warning: string;
      danger: string;
    };
  };
};
