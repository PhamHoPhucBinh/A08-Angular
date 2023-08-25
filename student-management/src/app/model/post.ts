import {Category} from "./category";
import {DirectionNeed} from "./directionNeed";
import {Region} from "./region";
import {CustomerType} from "./customerType";
import {UserNeed} from "./userNeed";
import {Condition} from "./condition";

export interface Post {
  id: number;
  category: Category;
  region: Region;
  customerType: CustomerType;
  condition: Condition;
  userNeed: UserNeed;
  address: string;
  area: number;
  directionNeed: DirectionNeed;
  title: string;
  description: string;
  price: number;
  image: string;
}
