import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }

  docToData(doc: any): any {
    const data = doc.data();
    data.id = doc.id;
    return data;
  }

  queryToData(query: any) {
    return query.docs.map(doc => this.docToData(doc));
  }
}
