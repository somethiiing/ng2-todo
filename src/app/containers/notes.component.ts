import { Component } from '@angular/core';
import { NoteService } from '../services';

@Component({
  selector: 'notes-container',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NoteCardContainer {
  notes = [];

  constructor(private noteService: NoteService) {
    this.noteService.getNotes()
      .subscribe( data => this.notes = data)
  }

  addNewNote(note) {
    this.noteService.createNote(note)
      .subscribe( data => this.notes.push(data))
  }

  onNoteChecked(note) {
    this.noteService.completeNote(note)
      .subscribe( data => {
        const i = this.notes.findIndex(localNote => localNote.id === data.id);
        this.notes.splice(i, 1);
      });
  }


}
