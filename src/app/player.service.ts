import { Injectable } from '@angular/core';
import { PlayerInfo } from './models/player-info';
import { PLAYERINFO } from './database';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerInfo: PlayerInfo[] = PLAYERINFO;

  addPlayer(newPlayer: PlayerInfo) {
    this.playerInfo.push(newPlayer);
    console.log(this.playerInfo);
  }
}
