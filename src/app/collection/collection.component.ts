import { Component, OnInit } from '@angular/core';
// import { SearchService } from './search.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  favBooks: any;

  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  ngOnInit(): void {
    this.getFavourites();
  }

  getFavourites() {
    this.firestore.collection(`collection`).get().toPromise().then(response => {
      this.favBooks = response.docs.map(d => d.data())
    })
  }
  handleDelete(item) {
    this.firestore.doc(`collection/${item.id}`).delete();
    this.getFavourites();
  }

}
