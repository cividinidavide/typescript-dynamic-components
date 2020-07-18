import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItaComponent } from './ita/ita.component';
import { DeuComponent } from './deu/deu.component';

@NgModule({
  declarations: [
    AppComponent,
    ItaComponent,
    DeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
