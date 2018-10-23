import { Component } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent {
  title = 'rpg-angular';

  constructor(private playerService: PlayerService) { }
}
