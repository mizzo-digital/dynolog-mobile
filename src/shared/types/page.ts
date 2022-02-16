export type Page<ContentType> = {
  content: ContentType[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
};
