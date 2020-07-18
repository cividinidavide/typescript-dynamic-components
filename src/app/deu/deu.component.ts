import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deu',
  templateUrl: './deu.component.html',
  styleUrls: ['./deu.component.scss']
})
export class DeuComponent implements OnInit {
  @Input() obj: Object = {};

  constructor() { }

  ngOnInit(): void {
  }
}
