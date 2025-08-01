import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html'
})
export class User {
  name:string = 'Alexander';
  age:number = 22;
}
