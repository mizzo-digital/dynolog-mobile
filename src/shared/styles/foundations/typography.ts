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
      'heading-primary-regular': 'Poppins-Regular',
      'heading-primary-medium': 'Poppins-Medium',
      'heading-primary-bold': 'Poppins-Bold',
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
      'input-primary-regular': 'Poppins-Regular',
      'input-primary-medium': 'Poppins-Medium',

      'button-primary-semibold': 'Poppins-SemiBold',

      'body-primary-regular': 'OpenSans-Regular',
      'body-primary-semibold': 'OpenSans-SemiBold',

      'body-secondary-regular': 'Poppins-Regular',
      'body-secondary-medium': 'Poppins-Medium',
      'body-secondary-bold': 'Poppins-Bold',
    },
  },
};
