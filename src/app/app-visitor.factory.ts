import { Type } from "@angular/core";

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
  }
}

export class DEU extends Article {
  size: string;

  constructor() {
    super();

    this.id = '1';
    this.name = 'ita';
    this.size = '5';
  }
}

const Store = {
  ITA,
  DEU,
};
type ClassMap = typeof Store;

export const createClass = <Key extends keyof ClassMap>(key: string) =>
  new Store[key] as InstanceType<ClassMap[Key]>;
