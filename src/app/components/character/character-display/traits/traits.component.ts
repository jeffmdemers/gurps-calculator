import { Component, OnInit, Input } from '@angular/core';
import { Trait } from '../../../../shared/models/character.model';


@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.scss']
})
export class TraitsComponent implements OnInit {

  @Input()
  traits: Trait[];

  constructor() { }

  ngOnInit() {
  }

}
