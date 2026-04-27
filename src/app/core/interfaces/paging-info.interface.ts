export interface PagingInfo {
  nextCursor?: string;
  previousCursor?: string,
  hasNext : boolean,
  hasPrevious : boolean,
  ascending : boolean
}