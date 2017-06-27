import { Injectable } from '@angular/core';
import { Store } from '../store';

@Injectable()
export class StoreService {
  constructor(private store: Store) {}

  update(prop, state) {
    const currState = this.store.getState();
    this.store.setState(Object.assign({}, currState, { [prop]: state }));
  }

  add(prop, state) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, { [prop]: [state, ...collection] }));
  }

  findAndUpdate(prop, state) {
    const currentState = this.store.getState();
    const collection = currentState[prop];
    this.store.setState(Object.assign({}, currentState, {
      [prop]: collection.map(item => {
        if (item.id !== state.id) {
          return item;
        }
        return Object.assign({}, item, state)
      })
    }))
  }

  findAndDelete(prop, note) {
    const currentState = this.store.getState();
    let collection = currentState[prop];
    const index = collection.find( elem => elem === note );
    collection = collection.splice(index, 1);
    this.store.setState({notes: collection});
    // this.store.setState(Object.assign({}, currentState, { [prop]: collection.filter(item => item.id !== id) }));
  }


}
