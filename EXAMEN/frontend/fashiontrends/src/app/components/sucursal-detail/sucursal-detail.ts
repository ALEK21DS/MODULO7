import { Component, Input } from '@angular/core';
import { Sucursal } from '../../model/Sucursal';

@Component({
  selector: 'app-sucursal-detail',
  standalone:true,
  imports: [],
  templateUrl: './sucursal-detail.html'
})
export class SucursalDetail {
  @Input()item!:Sucursal;
}
