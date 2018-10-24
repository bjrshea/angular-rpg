import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { WelcomeComponent } from '../welcome/welcome.component';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css'],
  providers: [PlayerService]
})
export class PlayerScoreComponent implements OnInit {

  playerInfo: FirebaseObjectObservable<any>;

  playerName: string;
  playerBio: string;
  playerIntelligence: string;

  constructor(private playerService: PlayerService) {

  }

  ngOnInit() {
    this.playerInfo = this.playerService.getPlayerInfo();
  }

}
