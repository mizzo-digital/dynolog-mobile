import { useViewerStore as viewerStore } from '..';
import { Viewer } from '../..';

export const updateViewer = (newViewer: Viewer) => {
  viewerStore.setState(newViewer);
};
