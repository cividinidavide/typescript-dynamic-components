import { Type } from "@angular/core";

import { ItaComponent } from "./ita/ita.component";
import { DeuComponent } from "./deu/deu.component";

abstract class Article {
  id: string;
  name: string;
  component: Type<any>;
}

export class ITA extends Article {
  pck: string;

  constructor() {
    super();

    this.id = '1';
    this.name = 'ita';
    this.pck = '4';
    this.component = ItaComponent;
  }
}

export class DEU extends Article {
  size: string;

  constructor() {
    super();

    this.id = '1';
    this.name = 'deu';
    this.size = '5';
    this.component = DeuComponent;
  }
}

const Store = {
  ITA,
  DEU,
};
type ClassMap = typeof Store;

export const createClass = <Key extends keyof ClassMap>(key: string) =>
  new Store[key] as InstanceType<ClassMap[Key]>;
