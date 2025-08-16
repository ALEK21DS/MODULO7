import { Component, OnInit } from '@angular/core';
import { CompanyView } from '../company-view/company-view';
import { InventarioM } from '../../model/InventarioM';
import { InventarioS } from '../../services/inventario-s';
import { SucursalView } from "../sucursal-view/sucursal-view";

@Component({
  selector: 'app-inventario',
  standalone:true,
  imports: [CompanyView, SucursalView],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class InventarioComponent implements OnInit {

  inventario1!: InventarioM;

  constructor(private service:InventarioS){}
  ngOnInit(): void {
    this.inventario1 = this.service.getInventario();
  }

}
