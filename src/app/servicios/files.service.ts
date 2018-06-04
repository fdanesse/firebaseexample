import { Injectable } from '@angular/core';
import { AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

// https://angularfirebase.com/lessons/firestore-with-angularfire-basics/


@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private collection$: AngularFirestoreCollection<any>;
  public collectionObserver: Observable<Array<any>>;

  constructor(public db: AngularFirestore) {
    this.collection$ = this.db.collection('Guias');
    this.collectionObserver = this.collection$.valueChanges();
  }

}
