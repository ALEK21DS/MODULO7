import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { InvoiceM } from '../../model/InvoiceM';

@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.html'
})
export class InvoiceComponent implements OnInit {

  invoice!:InvoiceM;

  constructor(private service:InvoiceService){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}
