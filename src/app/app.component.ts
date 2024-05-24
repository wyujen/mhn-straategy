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
import { selectRelationPropertyMapList } from 'libs/mhn-store/src/lib/property/property.frontend.selectors';

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
    
    this.dataS.loadData()

    selectRelationPropertyMapList.subscribe((data)=> console.log('aaaaa',data))
    // selectRelationDragonAreas.subscribe((data)=> console.log('bbbbb',data))
  }
}
