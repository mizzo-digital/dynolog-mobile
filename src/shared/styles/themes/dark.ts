import { typography, radius, spacing, colors } from '../foundations';
import { Theme } from './types';

export const darkTheme: Theme = {
  title: 'dark',

  typography,
  spacing,
  radius,

  colors: {
    backgrounds: {
      primary: colors.grayDarkness[900],
      secondary: colors.blueDarkness[900],
      tertiary: colors.blueDarkness[500],
    },

    shapes: {
      primary: colors.grayDarkness[500],
      secondary: colors.grayDarkness[400],
      tertiary: colors.grayDarkness[300],
      quaternary: colors.blueDarkness[400],
    },

    borders: {
      primary: colors.grayDarkness[300],
    },

    texts: {
      headings: {
        primary: colors.white,
      },
      body: colors.white,
      placeholder: colors.grayLight[500],
      details: colors.grayLight[500],
      button: colors.white,
      links: colors.blue[500],
    },

    buttons: {
      solid: {
        primary: {
          enabled: colors.blue[500],
          disabled: colors.blueDarkness[300],
          loading: colors.blue[700],
        },
      },
    },

    icons: {
      primary: colors.white,
      secondary: colors.grayLight[500],
    },

    semantic: {
      success: colors.green[500],
      warning: colors.yellow[500],
      danger: colors.red[500],
    },
  },
};
