import { Component } from '@angular/core';
import { QuestionsService } from '../questions.service';
import {DatabaseModel }from '../models/database-model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.css'],
  providers: [PlayerService, QuestionsService]
})
export class QuestionTwoComponent  {

  constructor(private playerService: PlayerService, private questions: QuestionsService) {}

choice1() {
  this.playerService.playerInfo[0].intelligence += 1;
  this.questions.questionPath[0].question = this.questions.databaseModel[3].question;

}
choice2() {
  this.playerService.playerInfo[0].intelligence += 1;
  this.questions.questionPath[0].question = this.questions.databaseModel[4].question;
}

}
