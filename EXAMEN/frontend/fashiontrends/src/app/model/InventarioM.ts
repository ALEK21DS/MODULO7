import { Company } from "./Company";
import { Sucursal } from "./Sucursal";

export class InventarioM{
    id!:string;
    company!:Company;
    sucursal!:Sucursal[];
}