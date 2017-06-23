import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { App } from './app.component';
import { NoteCardContainer } from './containers';
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './ui';
import { ApiService, NoteService} from './services';

@NgModule({
  declarations: [
    App,
    AppBar,
    NoteCard,
    NoteCardContainer,
    NoteCreator,
    ColorPicker
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    NoteService
  ],
  bootstrap: [App]
})
export class AppModule { }
