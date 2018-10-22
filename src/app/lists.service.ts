import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { List } from './list-model';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  url = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
  ) { }

  getlists(): Observable<List[]> {
    return this.http.get<List[]>(this.url + '/lists');
  }

  getlist(id: string): Observable<List> {
    return this.http.get<List>(this.url + '/lists/' + id);
  }

  add(list: List): Observable<List> {
    return this.http.post<List>(this.url + '/lists', list, {headers});
  }

  save(list: List): Observable<List> {
    return this.http.put<List>(this.url + '/lists/' + list.id, list, {headers});
  }

  delet(id: string): Observable<any> {
    return this.http.delete(this.url + '/lists/' + id);
  }
}
