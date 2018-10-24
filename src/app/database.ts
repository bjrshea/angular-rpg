import { PlayerInfo } from "./models/player-info";
import { DatabaseModel } from "./models/database-model";

export const PLAYERINFO: PlayerInfo[] = [
  new PlayerInfo('', '')

];

export const QUESTIONPATH: DatabaseModel[] = [];

export const QUESTIONS: DatabaseModel[] = [

  new DatabaseModel('Would you like to attend Epicodus?'),
  new DatabaseModel('Question 2.1'),
  new DatabaseModel('Question 2.2'),
  new DatabaseModel('Question 3.1'),
  new DatabaseModel('Question 3.2'),
  new DatabaseModel('Question 4.1'),
  new DatabaseModel('Question 4.2'),
  new DatabaseModel('Question 5.1'),
  new DatabaseModel('Question 5.2')
];
