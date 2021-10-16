import { players, Player } from './../models/player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  players = players;
  selectedPlayerName: string;
  selectedPlayerAge: number;
  selectedPlayerPosition: string;

  constructor() {
    this.selectedPlayerName = "Ninguno";
    this.selectedPlayerAge = 0;
    this.selectedPlayerPosition = "Ninguno";
  }

  ngOnInit(): void {
  }

  onNotify(player: Player) {
    this.selectedPlayerName = player.name;
    this.selectedPlayerAge = player.age;
    this.selectedPlayerPosition = player.position;
  }

}
