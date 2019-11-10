import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";

import { pageIds } from "./page-ids.js";

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  page: string = pageIds.LANDING;

  constructor() { }

  getPage(): Observable<string> {
    return of(this.page);
  }

  setPage(page: string) {
    this.page = page;
  }
}
