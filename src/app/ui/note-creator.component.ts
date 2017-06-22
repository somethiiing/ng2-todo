import { Component } from '@angular/core';

@Component({
  selector: 'note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})

export class NoteCreatorComponent {
  newNote = {
    title: '',
    value: '',
    color: ''
  }
};
