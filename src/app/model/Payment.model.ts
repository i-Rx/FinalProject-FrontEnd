import { User } from "./User.model";

export class Payment{
     
    constructor(
      private codeNumber: number,
      private cardType: string,
      private user: User
    ) {}

}