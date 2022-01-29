import { Viewer } from '..';
import { createStoreWithPersist } from '../../../shared/utils/store/create-store-with-persist';

import * as actions from './actions';

export const INITIAL_STORE: Partial<Viewer> = {};
const KEY_STORAGE = '@appointments:viewer';

export const [useViewerStore, useViewerActions] = createStoreWithPersist(
  KEY_STORAGE,
  INITIAL_STORE,
  actions,
);
