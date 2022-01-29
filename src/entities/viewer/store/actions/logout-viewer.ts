import { useViewerStore as viewerStore, INITIAL_STORE } from '..';

export const logoutViewer = () => {
  viewerStore.setState(INITIAL_STORE, true);
};
