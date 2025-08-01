import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './componentes/user/user';
import { Product } from "./componentes/product/product";

@Component({
  selector: 'root',
  imports: [User, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:string = 'ejemplo1';
  author:string = 'Brandon Pesantez';
}
