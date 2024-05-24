import { group } from '@angular/animations';
import { Component } from '@angular/core'
import { selectRelationAreaMapList, selectRelationAreas } from 'libs/mhn-store/src/lib/area/area.frontend.selectors';
import { selectRelationDragonMapList, selectRelationDragons } from 'libs/mhn-store/src/lib/dragon/dragon.frontend.selectors';
import { selectRelationDragonAreas } from 'libs/mhn-store/src/lib/dragon-area/dragon-area.frontend.selectors';
import { Store } from 'libs/mhn-store/src/lib/frontend';
import { selectRelationGroupMapList } from 'libs/mhn-store/src/lib/group/group.frontend.selectors';
import { selectRelationUserMapList } from 'libs/mhn-store/src/lib/user/user.frontend.selectors';
import { UpsertMany } from 'mycena-store';
import { debounceTime } from 'rxjs';
import { DataServiceService } from './data/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mhn-strategy';
  constructor(
    private dataS : DataServiceService
  ){
    // Store.subscribe((e)=> console.log(e))
    // Store.dispatch(new UpsertMany('user',[{id:'u01', name:'utest', groupId:'g01'}]))
    // Store.dispatch(new UpsertMany('group',[{id:'g01', name:'gtest'}]))


    // Store.dispatch(new UpsertMany('dragon',[{id:'d01', name:'dtest'}]))
    // Store.dispatch(new UpsertMany('area',[{id:'a01', name:'atest'}]))
    // Store.dispatch(new UpsertMany('dragonArea',[{id:'d01a01', areaId:'a01',dragonId:'d01'}]))
    // Store.dispatch(new UpsertMany('area',[{id:'a02', name:'atest2', dragonId:'d01'}]))
    this.dataS.loadData()

    // selectRelationAreaMapList.subscribe((data)=> console.log('aaaaa',data))
    // selectRelationDragonAreas.subscribe((data)=> console.log('bbbbb',data))
  }
}
