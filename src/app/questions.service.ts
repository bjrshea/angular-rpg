import { Injectable } from '@angular/core';
import { DatabaseModel } from './models/database-model';
// import { QUESTIONS, QUESTIONPATH } from './database';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questionList: FirebaseListObservable<any[]>;

  questionPath: FirebaseObjectObservable<any>;

  firstQuestion: DatabaseModel;

  constructor(private database: AngularFireDatabase) {
    this.questionList = database.list('/questions');
    this.questionPath = database.object('/questionPath');
  }

  getQuestions(){
    this.questionList.subscribe(p => {
    })
    return this.questionList;
  }

  addQuestion(newQuestion: DatabaseModel) {
    this.questionPath.set(newQuestion);
  }
}
