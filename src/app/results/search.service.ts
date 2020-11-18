import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface GoogleBooksResponse {
  items: any[];
  kind: string;
  totalItems: number;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  booksResult = [];

  constructor(private http: HttpClient) {}

}
