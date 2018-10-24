import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { QuestionsService } from '../questions.service';
import { DatabaseModel }from '../models/database-model';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css'],
  providers: [PlayerService, QuestionsService]
})
export class QuestionOneComponent implements OnInit {

  questions: FirebaseListObservable<any[]>;
  question2: DatabaseModel;
  question1: DatabaseModel;
  player: FirebaseObjectObservable<any>;
  intelligence: number;

  constructor(private questionService: QuestionsService, private playerService: PlayerService) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.questions.subscribe(p => {
      this.question1 = p[0].question;
      this.questionService.addQuestion(this.question1);
    })
  }

  choice1() {
    // this.playerService.playerInfo[0].intelligence += 1;
    this.questions = this.questionService.getQuestions();
    this.questions.subscribe(p => {
      this.question2 = p[1].question;
      this.questionService.addQuestion(this.question2);


      this.player = this.playerService.getPlayerInfo();
      this.player.subscribe(p => {
        this.intelligence = p.intelligence + 1;
        this.playerService.changeScore(this.intelligence);
        // this.questionService.addQuestion(this.question2);
      })
    })


  }
  choice2() {
    this.questions = this.questionService.getQuestions();
    this.questions.subscribe(p => {
      this.question2 = p[2].question;
      this.questionService.addQuestion(this.question2);
    })
    // this.playerService.playerInfo[0].intelligence += -1;

  }
}
