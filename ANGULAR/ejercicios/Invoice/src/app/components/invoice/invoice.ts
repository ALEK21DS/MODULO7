import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { InvoiceM } from '../../model/InvoiceM';
import { CompanyView } from "../company-view/company-view";
import { CustomerView } from "../customer-view/customer-view";
import { InvoiceDetail } from "../invoice-detail/invoice-detail";

@Component({
  selector: 'app-invoice',
  imports: [CompanyView, CustomerView, InvoiceDetail],
  templateUrl: './invoice.html'
})
export class InvoiceComponent implements OnInit {

  invoice!:InvoiceM;

  constructor(private service:InvoiceService){}

  ngOnInit(): void {
    this.service.getInvoice().subscribe(
      (data: InvoiceM) => {
        this.invoice = data;
        console.log('Datos recibidos del backend:', data)
      },
      (error) => {
        console.error('Error al obtener datos del backend:', error);
        console.error('Asegurate de que el backend este en el puerto 3000');
      }
    )
  }

}
