import { Component, OnInit } from '@angular/core';
import { NoteService, StoreService } from '../services';
import { Store } from '../store';

@Component({
  selector: 'notes-container',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NoteCardContainer implements OnInit {
  notes = [];

  constructor(
    private noteService: NoteService,
    private storeService: StoreService,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.changes
      .map(data => data.notes)
      .subscribe(notes => this.notes = notes );

    this.noteService.getNotes().subscribe();
  }

  addNewNote(note) {
    this.noteService.createNote(note).subscribe()
  }

  onNoteChecked(note, index) {
    this.noteService.completeNote(note).subscribe();
  }

}
