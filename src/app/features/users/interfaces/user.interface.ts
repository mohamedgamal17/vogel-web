import { Entity } from "../../../core/interfaces/entity.interface";
import { Gender } from "../enums/gender.enum";
import { Avatar } from "./avatar.interface";

export interface User extends Entity {
  firstName: string;
  lastName: string;
  gender : Gender,
  birthDate : string,
  avatarId? : string,
  avatar? : Avatar,
  
}