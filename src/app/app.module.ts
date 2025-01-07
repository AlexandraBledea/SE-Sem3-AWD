import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponentComponent } from './history-component/history-component.component';
import { FeelingVsEmotionComponent } from './feeling-vs-emotion/feeling-vs-emotion.component';
import { DefinitionsComponent } from './definitions/definitions.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponentComponent,
    FeelingVsEmotionComponent,
    DefinitionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
