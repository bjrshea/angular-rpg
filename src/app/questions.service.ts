import { Injectable } from '@angular/core';
import { DatabaseModel } from './models/database-model';
import { QUESTIONS, QUESTIONPATH } from './questionsDatabase';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  databaseModel: DatabaseModel[] = QUESTIONS;

  questionPath: DatabaseModel[] = QUESTIONPATH;

  constructor() { }
}
