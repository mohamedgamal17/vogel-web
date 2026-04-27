import { Entity } from "../../../core/interfaces/entity.interface";
import { MediaType } from "../enums/media-type.enum";

export interface Media extends Entity{
  reference : string,
  mediaType : MediaType,
  mimeType : string, 
  size : number,
  userId : string
}