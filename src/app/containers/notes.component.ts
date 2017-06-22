import { Component } from '@angular/core';

@Component({
  selector: 'notes-container',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NoteCardContainerComponent {
  notes = [
    { title: 'this is a note', value: 'this is the value!', color: 'green' },
    { title: 'this is a note', value: 'this is the value!', color: 'blue' },
    { title: 'this is a note', value: 'this is the value!', color: 'red' }
  ]

  onNoteChecked(i: number) {
    this.notes.splice(i, 1);
  }

}
