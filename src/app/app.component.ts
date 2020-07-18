import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { createClass } from "./app.factory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    let lCode = 'ITA';
    const obj = createClass(lCode);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(obj.component);
    const componentRef = this.container.createComponent(componentFactory);

    componentRef.instance.obj = obj;
  }
}
