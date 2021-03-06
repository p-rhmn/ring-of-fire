import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() name: any;
  @Input() img = '1.png';
  @Input() playerActive: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
