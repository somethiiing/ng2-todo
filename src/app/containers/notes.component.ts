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

  onNoteChecked(note, index) {
    this.notes.splice(index, 1);
    this.noteService.completeNote(note)
      .subscribe();
  }


}
