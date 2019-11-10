import { Injectable } from '@angular/core';

import { Observable, Subject, of } from "rxjs";

import { pageIds } from "./page-ids.js";

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  page = new Subject<string>();
  pageObs = this.page.asObservable();

  constructor() {
    this.page.next(pageIds.LANDING);
  }

  getPage(): Observable<string> {
    return this.pageObs;
  }

  setPage(page: string) {
    this.page.next(page);
  }
}
