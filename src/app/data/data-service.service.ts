import { Injectable } from '@angular/core';
import { Store } from 'libs/mhn-store/src/lib/frontend';
import { UpsertMany } from 'mycena-store';
import { originalAreaList, originalDragonList, originalDragonaAreaList } from './dragon-area';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() {
    this.loadData()
  }

  loadData() {
    Store.subscribe((e) => console.log(e))
    Store.dispatch(new UpsertMany('area', originalAreaList))
    Store.dispatch(new UpsertMany('dragon', originalDragonList))
    Store.dispatch(new UpsertMany('dragonArea', originalDragonaAreaList))
  }


}