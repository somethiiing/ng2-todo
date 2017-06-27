import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { App } from './app.component';
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './ui';
import { NoteCardContainer, About } from './containers';
import { ApiService, NoteService, StoreService } from './services';
import { routes } from './router';

@NgModule({
  declarations: [
    App,
    AppBar,
    NoteCard,
    NoteCardContainer,
    NoteCreator,
    ColorPicker,
    About
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    ApiService,
    NoteService,
    StoreService
  ],
  bootstrap: [App]
})
export class AppModule { }
