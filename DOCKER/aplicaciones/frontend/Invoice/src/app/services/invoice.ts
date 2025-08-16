import { Injectable } from '@angular/core';
import { InvoiceM } from '../model/InvoiceM';
import { invoiceData } from '../data/invoice.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = 'http://localhost:3000/api'; //Url base del backend
  constructor(private http: HttpClient) {}

  getInvoice():Observable<InvoiceM>{
    console.log('InvoiceService: solicitando datos del backend...');
    return this.http.get<InvoiceM>(`${this.apiUrl}/invoice`)
  }
    
}
