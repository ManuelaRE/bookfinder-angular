import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './search.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  // Inputs/Outputs go at the top along with other properties
  @Input() searchResult: any;

  favBooks: any;

  constructor(private firestore: AngularFirestore, private http: HttpClient, private searchService: SearchService) { }

  ngOnInit(): void {
    this.firestore.collection(`collection`).get().toPromise().then(response => {
      this.favBooks = response.docs.map(d => d.data())
    })
    
  }

  handleSave(item) {
    this.firestore.doc(`collection/${item.id}`).set(item, { merge: true });
    alert("Item added to favourites")
  }


}
