import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponentComponent } from './history-component/history-component.component';
import { FeelingVsEmotionComponent } from './feeling-vs-emotion/feeling-vs-emotion.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { DifferentContextsComponent } from './different-contexts/different-contexts.component';
import { ImpossibleContextComponent } from './impossible-context/impossible-context.component';
import { WordDerivatesComponent } from './word-derivates/word-derivates.component';
import { MeanToOthersComponent } from './mean-to-others/mean-to-others.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponentComponent,
    FeelingVsEmotionComponent,
    DefinitionsComponent,
    DifferentContextsComponent,
    ImpossibleContextComponent,
    WordDerivatesComponent,
    MeanToOthersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
