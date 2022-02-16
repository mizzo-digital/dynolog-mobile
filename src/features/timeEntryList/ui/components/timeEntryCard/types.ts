export type Props = {
  startDate: Date;
  endDate: Date;
  description?: string | null;
  project?: null | {
    name: string;
    color?: string | null;
  };
};
