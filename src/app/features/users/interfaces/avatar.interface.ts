import { Entity } from "../../../core/interfaces/entity.interface";

export interface Avatar extends Entity{
  reference : string,
  userId : string
}