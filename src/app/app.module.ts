import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponentComponent } from './history-component/history-component.component';
import { FeelingVsEmotionComponent } from './feeling-vs-emotion/feeling-vs-emotion.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { ImpossibleContextComponent } from './impossible-context/impossible-context.component';
import { WordDerivatesComponent } from './word-derivates/word-derivates.component';
import { MeanToOthersComponent } from './mean-to-others/mean-to-others.component';
import { MeanToMeComponent } from './mean-to-me/mean-to-me.component';
import { SpecificContextComponent } from './specific-context/specific-context.component';
import { FeelingArtComponent } from './feeling-art/feeling-art.component';
import { FeelingMusicComponent } from './feeling-music/feeling-music.component';
import { FeelingCookingComponent } from './feeling-cooking/feeling-cooking.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponentComponent,
    FeelingVsEmotionComponent,
    DefinitionsComponent,
    ImpossibleContextComponent,
    WordDerivatesComponent,
    MeanToOthersComponent,
    MeanToMeComponent,
    SpecificContextComponent,
    FeelingArtComponent,
    FeelingMusicComponent,
    FeelingCookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
