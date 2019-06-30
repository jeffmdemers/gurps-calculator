import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-icon',
  templateUrl: './result-icon.component.html',
  styleUrls: ['./result-icon.component.scss'],
})
export class ResultIconComponent implements OnInit {
  @Input() success: boolean;
  @Input() value: boolean;
  constructor() {}

  ngOnInit() {}
}
