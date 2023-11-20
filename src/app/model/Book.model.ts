import { Car } from "./Car.model";
import { User } from "./User.model";

export class Book {
    
    constructor(
      private bookCode: string,
      private nationalID: number,
      private startDate : string,
      private endDate : string,
      private location :string,
      private user: User,
      private car: Car,
      
    ) {}

}