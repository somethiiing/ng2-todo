import {
  Component,
  Input
 } from '@angular/core';

@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})

export class NoteCardComponent {
  @Input() note = {};
};
