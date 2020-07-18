import { Type } from "@angular/core";

import { ItaComponent } from "./ita/ita.component";
import { DeuComponent } from "./deu/deu.component";
import { NotFoundComponent } from "./not-found/not-found.component";

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

export class NotFound extends Article {
  constructor() {
    super();

    this.id = '0';
    this.name = 'NOT FOUND';
    this.component = NotFoundComponent;
  }
}

const ArticleType = {
  ITA,
  DEU,
  NotFound,
};
type ArticleMap = typeof ArticleType;

export const createClass = <Key extends keyof ArticleMap>(localizationCode: string) => {
  try {
    return new ArticleType[localizationCode] as InstanceType<ArticleMap[Key]>;
  } catch {
    return new ArticleType['NotFound'] as InstanceType<ArticleMap[Key]>;
  }
}
