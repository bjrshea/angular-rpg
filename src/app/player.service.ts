import { Injectable } from '@angular/core';
import { PlayerInfo } from './models/player-info';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerInfo: FirebaseObjectObservable<any>;
  playerInfoList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.playerInfo = database.object('/playerInfo');
  }

  getPlayerInfo(){
    this.playerInfo.subscribe(p => {
    })
    return this.playerInfo;
  }

  addPlayer(newPlayer: PlayerInfo) {
    this.playerInfo.set(newPlayer);
  }

  changeScore(changeScore: number) {
    // this.playerInfo.intelligence.set(changeScore);
    // Need to set updated intelligence
  }
}
