import { PagingInfo } from "./paging-info.interface";

export interface Paging<T>{
  data : T[],
  info : PagingInfo
}