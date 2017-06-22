import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoteCardContainerComponent } from './containers';
import { AppBarComponent, NoteCardComponent, NoteCreatorComponent } from './ui';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    NoteCardComponent,
    NoteCardContainerComponent,
    NoteCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
