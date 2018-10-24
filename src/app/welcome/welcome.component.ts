import { Component, OnInit } from '@angular/core';
import { PlayerInfo } from '../models/player-info';
import { PlayerService } from '../player.service';
import { PlayerScoreComponent } from '../player-score/player-score.component';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { QuestionsService } from '../questions.service';
import { DatabaseModel }from '../models/database-model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService]
})
export class WelcomeComponent implements OnInit {

  playerInfo: FirebaseObjectObservable<any>;

  questions: FirebaseListObservable<any[]>;
  firstQuestion: DatabaseModel;

  constructor(private playerService: PlayerService, private questionService: QuestionsService) {
  }

  ngOnInit() {
    this.playerInfo = this.playerService.getPlayerInfo();
  }

  startGame(name: string, bio: string) {
    var newPlayer = new PlayerInfo(name, bio);
    this.playerService.addPlayer(newPlayer);
  }
}
