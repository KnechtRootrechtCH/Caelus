import { makeAutoObservable } from 'mobx';
import { firestore } from '../config/firebase';

export class ConfigurationStore {
  configuration = null;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.init();
  }

  init() {
    firestore.collection('static').doc('configuration').onSnapshot(doc => {
      const configuration = doc.data();
      this.configuration = configuration;
      this.rootStore.authentication.checkPrivilages(configuration.administrators);
    });
  }

  get initialized() {
    return this.configuration != null;
  }
}