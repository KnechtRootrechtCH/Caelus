import { makeAutoObservable } from 'mobx';
//import { fire } from '../config/firebase';

export class MasterdataStore {
  vehicles = [];

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}