export type TimeEntry = {
  id: string;
  description: string | null;
  start: string;
  stop: string;
  project: null | {
    id: string;
    name: string;
    color: string | null;
  };
};
