import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { QuestionsService } from '../questions.service';
import {DatabaseModel }from '../models/database-model';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css'],
  providers: [PlayerService, QuestionsService]
})
export class QuestionOneComponent {

  constructor(private playerService: PlayerService, private questions: QuestionsService) {}

  choice1() {
    this.playerService.playerInfo[0].intelligence += 1;
    this.questions.questionPath.push(new DatabaseModel(this.questions.databaseModel[1].question));
    console.log(this.questions.questionPath)

  }
  choice2() {
    this.playerService.playerInfo[0].intelligence += -1;
    this.questions.questionPath.push(new DatabaseModel(this.questions.databaseModel[2].question));
  }
}
