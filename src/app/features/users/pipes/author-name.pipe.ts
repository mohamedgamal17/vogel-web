import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../interfaces/user.interface";

@Pipe({
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    var user = value as User;
    if(user != null){
      return user.firstName + ' ' + user.lastName;
    }
    return `Anonymous`;
  }

}