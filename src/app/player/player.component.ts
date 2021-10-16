import { Player } from './../models/player';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player!: Player;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectPlayer(player: Player) {
    this.notify.emit(player);
  }

}
