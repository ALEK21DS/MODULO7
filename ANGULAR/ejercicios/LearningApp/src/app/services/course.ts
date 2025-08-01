import { Injectable } from '@angular/core';
import { LearningM } from '../model/LearningM';
import { learningData } from '../data/learning.data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private course:LearningM = learningData;
  constructor () {}

  getCourse():LearningM{
    return this.course;
  }
}
