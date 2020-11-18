import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router'; 

// Here we've defined a "type" for the response for the API. rather than just having it as an untyped/any..
// ... and now we know what properties exist on this response.. great huh?
interface GoogleBooksResponse {
  items: any[];
  kind: string;
  totalItems: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  searchText: string;
  searchResult: any = [];
  isViewable: boolean; 

  constructor(private http: HttpClient, private router: Router) { }

  @Input() favBooks: any;

  ngOnInit(): void {
    this.handleInitialDisplay();
    this.isViewable = true; 

  }


  handleSearch() {
    const itemToSearch = this.searchText;
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor=${itemToSearch}&saleInfo.saleability=FOR_SALE`).toPromise()
    .then((response:GoogleBooksResponse) => {
      this.searchResult = response.items;
    })
  };

  handleInitialDisplay() {
    const itemToSearch = this.searchText;
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor=rowling&saleInfo.saleability=FOR_SALE`).toPromise()
    .then((response:GoogleBooksResponse) => {
      this.searchResult = response.items;
    })
  }

  toggle(): void { 
    this.isViewable = !this.isViewable; 
  } 
}
