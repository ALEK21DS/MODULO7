import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';
import { StudentDetail } from "../student-detail/student-detail";

@Component({
  selector: 'students-list',
  standalone:true,
  imports: [StudentDetail],
  templateUrl: './students-list.html'
})
export class StudentsList {
  @Input()students!:Student[];
}
