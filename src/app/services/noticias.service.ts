import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService implements OnInit {

  noticias: any[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getDataApi(categoria = 'general'): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=35f361ac7d3f48a6aa8de4d8e30cbfe2`;

    return this.http.get(url).pipe(
      map((resp: any) => {
        this.noticias = resp.articles;
        return this.noticias;
      })
    );   
  }

}
