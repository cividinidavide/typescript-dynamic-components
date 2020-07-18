import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ita',
  templateUrl: './ita.component.html',
  styleUrls: ['./ita.component.scss']
})
export class ItaComponent implements OnInit {
  @Input() obj: Object = {};

  constructor() { }

  ngOnInit(): void {
  }
}
