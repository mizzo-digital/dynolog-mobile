import 'styled-components';

import { Theme } from '../shared/styles/themes/types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
