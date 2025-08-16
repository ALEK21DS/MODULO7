import { Component, Input } from '@angular/core';
import { Sucursal } from '../../model/Sucursal';
import { ItemProduct } from '../../model/ItemProduct';

@Component({
  selector: 'sucursal-view',
  standalone:true,
  imports: [],
  templateUrl: './sucursal-view.html'
})
export class SucursalView {
  @Input()sucursales!: Sucursal[];
  @Input()itemS!:ItemProduct[];
}
