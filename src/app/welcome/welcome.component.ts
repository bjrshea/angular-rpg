import { Component } from '@angular/core';
import { PlayerInfo } from '../models/player-info';
import { PlayerService } from '../player.service';
import { PlayerScoreComponent } from '../player-score/player-score.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService]
})
export class WelcomeComponent {

  constructor(private playerService: PlayerService) {
  }
  startGame(name: string, bio: string) {
    this.playerService.playerInfo[0].name = name;
    this.playerService.playerInfo[0].bio = bio;
  }
}
