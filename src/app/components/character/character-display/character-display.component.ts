import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss']
})
export class CharacterDisplayComponent implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.character = this.route.snapshot.data.character;
  }

}
