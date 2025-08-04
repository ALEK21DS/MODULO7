import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';

@Component({
  selector: 'tr[invoice-item]',
  standalone:true,
  imports: [],
  templateUrl: './invoice-item.html'
})
export class InvoiceItemC {
  @Input()itemC!:InvoiceItem
}
