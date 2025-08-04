import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';
import { LearningM } from '../../model/LearningM';
import { CourseView } from "../course-view/course-view";
import { StudentsList } from "../students-list/students-list";

@Component({
  selector: 'app-learning',
  standalone:true,
  imports: [CourseView, StudentsList],
  templateUrl: './learning.html',
  styleUrl: './learning.css'
})
export class LearningComponent implements OnInit{

  learnig!: LearningM;

  constructor(private service:CourseService){}
  ngOnInit(): void {
    this.learnig = this.service.getCourse();
  }
  
}
