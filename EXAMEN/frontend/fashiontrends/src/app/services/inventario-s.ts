import { Injectable } from '@angular/core';
import { InventarioM } from '../model/InventarioM';
import { inventarioData } from '../data/inventario.data';

@Injectable({
  providedIn: 'root'
})
export class InventarioS {
  
  private inventario:InventarioM = inventarioData;
  constructor (){}

  getInventario():InventarioM {
    return this.inventario;
  }
}
