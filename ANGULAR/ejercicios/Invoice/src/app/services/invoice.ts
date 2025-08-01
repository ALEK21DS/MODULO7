import { Injectable } from '@angular/core';
import { InvoiceM } from '../model/InvoiceM';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice:InvoiceM = invoiceData;
  constructor () { }

  getInvoice():InvoiceM{
    return this.invoice;
  }
}
