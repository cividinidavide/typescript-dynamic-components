import { Component, OnInit } from '@angular/core';

import { createClass } from "./app-visitor.factory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    let lCode = 'ITA';
    const obj = createClass(lCode);

    console.error(obj);
  }
}
