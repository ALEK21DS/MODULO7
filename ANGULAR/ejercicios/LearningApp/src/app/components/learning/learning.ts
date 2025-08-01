import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';
import { LearningM } from '../../model/LearningM';

@Component({
  selector: 'app-learning',
  imports: [],
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
