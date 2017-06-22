import { Component } from '@angular/core';

@Component({
  selector: 'notes-container',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NoteCardContainerComponent {
  note: {
    title: 'this is a note',
    value: 'this is the value!'
  }
}
