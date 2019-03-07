import { Component, OnInit, Input } from '@angular/core';
import { Status, Identity } from 'src/app/shared/models/character.model';

@Component({
  selector: 'app-character-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() identity: Identity;
  @Input() status: Status;

  constructor() { }

  ngOnInit() {
  }

}
