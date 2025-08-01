import { Category } from "./Category";

export class Product {
    id!:number;
    name!:string;
    category!:Category;
    price!:number;
    description!:string;
}