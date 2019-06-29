import { Component, Input, OnInit } from '@angular/core';
import { Identity } from 'src/app/shared/models/character.model';
import { Status } from 'src/app/shared/models/status.model';
@Component({
  selector: 'app-character-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() identity: Identity;
  @Input() status: Status;

  constructor() {}

  ngOnInit() {}
}
