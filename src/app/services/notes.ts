import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { StoreService } from './store';

@Injectable()
export class NoteService {
  path: string = '/notes';
  constructor(
    private api: ApiService,
    private storeService: StoreService
  ) {}

  // createNote(note) {
  //   return this.api.post(this.path, note)
  //     .do(data => this.storeService.add('notes', data));
  // }

  // getNotes() {
  //   return this.api.get(this.path)
  //     .do(resp => this.storeService.update('notes', resp));
  // }

  // completeNote(note) {
  //   return this.api.delete(this.path, note)
  //     .do(data => this.storeService.findAndDelete('notes', note));
  // }

  getNotes(jwt: string) {
    return this.api.post('/getnotes', {jwt: jwt} )
      .do(resp => this.storeService.update('notes', resp));
  }

  createNote(jwt, note) {
    const data = { note: note, jwt: jwt }
    return this.api.post('/addnote', data)
      .do(res => this.storeService.add('notes', res));
  }

  completeNote(jwt, note) {
    const data = { note: note, jwt: jwt }
    return this.api.post('/deletenote', data)
      .do(res => this.storeService.findAndDelete('notes', res));
  }

}
