import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css'],
  providers: [PlayerService]
})
export class PlayerScoreComponent {

  constructor(private playerService: PlayerService) { }

}
