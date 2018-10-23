import { Component } from '@angular/core';
import { QuestionsService } from '../questions.service';
import {DatabaseModel }from '../models/database-model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.css'],
  providers: [PlayerService, QuestionsService]
})
export class QuestionThreeComponent  {

  constructor(private playerService: PlayerService, private questions: QuestionsService) {}

}
