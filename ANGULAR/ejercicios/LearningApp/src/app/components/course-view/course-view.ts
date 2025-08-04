import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'course-view',
  standalone:true,
  imports: [],
  templateUrl: './course-view.html'
})
export class CourseView {
  @Input()course!:Course;
}
