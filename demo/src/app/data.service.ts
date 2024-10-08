import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generateOptions } from './util';
import { DataModel } from './data-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData(count: number): Observable<DataModel> {
    return Observable.create(obsever => obsever.next({
      options: generateOptions(count),
      selectedItems: [2, 4]
    }))
  }
}
