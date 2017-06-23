import { Component } from '@angular/core';

@Component({
  selector: 'notes-container',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NoteCardContainer {
  notes = []

  onNoteChecked(i: number) {
    this.notes.splice(i, 1);
  }

  addNewNote(note) {
    this.notes.push(note);
  }

}
