const FONT_SIZE_BASE = 4;
const LINE_HEIGHT_BASE = 4;

export const typography = {
  heading: {
    fontSizes: {
      sm: `${3.5 * FONT_SIZE_BASE}px`,
      md: `${4 * FONT_SIZE_BASE}px`,
      lg: `${5 * FONT_SIZE_BASE}px`,
    },

    lineHeights: {
      sm: `${6 * LINE_HEIGHT_BASE}px`,
      md: `${6.5 * LINE_HEIGHT_BASE}px`,
      lg: `${7.5 * LINE_HEIGHT_BASE}px`,
    },

    fonts: {
      'primary-regular': 'Poppins-Regular',
      'primary-medium': 'Poppins-Medium',
    },
  },

  complementary: {
    fontSizes: {
      xs: `${3 * FONT_SIZE_BASE}px`,
      sm: `${3.5 * FONT_SIZE_BASE}px`,
      md: `${4 * FONT_SIZE_BASE}px`,
      lg: `${5 * FONT_SIZE_BASE}px`,
    },

    lineHeights: {
      xs: `${5 * LINE_HEIGHT_BASE}px`,
      sm: `${6 * LINE_HEIGHT_BASE}px`,
      md: `${6.5 * LINE_HEIGHT_BASE}px`,
      lg: `${7.5 * LINE_HEIGHT_BASE}px`,
    },

    fonts: {
      'input-regular': 'Poppins-Regular',
      'input-medium': 'Poppins-Medium',

      'button-semibold': 'Poppins-SemiBold',

      'body-regular': 'OpenSans-Regular',
      'body-semibold': 'OpenSans-SemiBold',
    },
  },
};
