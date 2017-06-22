import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoteCardContainerComponent } from './containers';
import { AppBarComponent, NoteCardComponent } from './ui';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    NoteCardComponent,
    NoteCardContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
