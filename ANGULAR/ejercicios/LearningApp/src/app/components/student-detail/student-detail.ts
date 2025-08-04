import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr [student-detail]',
  imports: [],
  templateUrl: './student-detail.html'
})
export class StudentDetail {
  @Input()item!:Student;
}
