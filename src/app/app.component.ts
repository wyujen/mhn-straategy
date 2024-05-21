import { Component } from '@angular/core'
import { selectRelationAreas } from 'libs/mhn-store/src/lib/area/area.frontend.selectors';
import { selectRelationDragons } from 'libs/mhn-store/src/lib/dragon/dragon.frontend.selectors';
import { Store } from 'libs/mhn-store/src/lib/frontend';
import { UpsertMany } from 'mycena-store';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mhn-strategy';
  constructor(){
    Store.subscribe((e)=> console.log(e))
    Store.dispatch(new UpsertMany('dragon',[{id:'d01', name:'dtest', areaId:'a01'}]))
    Store.dispatch(new UpsertMany('area',[{id:'a01', name:'atest', dragonId:'d01'}]))
    Store.dispatch(new UpsertMany('area',[{id:'a02', name:'atest2', dragonId:'d01'}]))

    selectRelationAreas.subscribe((data)=> console.log('aaaaa',data))
    selectRelationDragons.subscribe((data)=> console.log('bbbbb',data))

  }
}
