import {Category} from "./category";

export interface Product{
  id: number,
  productName: string,
  price: number,
  details: string,
  category: Category
}
