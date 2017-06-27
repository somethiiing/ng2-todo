import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { App } from './app.component';
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './ui';
import { NoteCardContainer, About } from './containers';
import { ApiService, NoteService, StoreService } from './services';
import { routes } from './router';
import { Store } from './store';

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
    Store,
    StoreService
  ],
  bootstrap: [App]
})
export class AppModule { }
