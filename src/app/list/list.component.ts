import { Component, OnInit, Signal } from '@angular/core';
import { selectRelationAreas } from 'libs/mhn-store/src/lib/area/area.frontend.selectors';
import { AreaRelation } from 'libs/mhn-store/src/lib/relation.interface';
import { debounceTime } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'
import { selectRelationPropertys } from 'libs/mhn-store/src/lib/property/property.frontend.selectors';
import { selectRelationDragons } from 'libs/mhn-store/src/lib/dragon/dragon.frontend.selectors';
import { Router } from '@angular/router';

export type IPageCase = 
| '' 
| 'area' 
| 'property' 
| 'dragon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  areaList = toSignal(selectRelationAreas.pipe(debounceTime(1000)), { initialValue: [] });
  propertyList = toSignal(selectRelationPropertys.pipe(debounceTime(1000)), { initialValue: [] });
  dragonList = toSignal(selectRelationDragons.pipe(debounceTime(1000)), { initialValue: [] });

  pageList: IPageCase[] = ['area', 'property', 'dragon']
  currentPage: IPageCase | '' = ''

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
  }
  test() {
    console.log('areaList', this.areaList())
  }
  setPage(page: IPageCase) {
    this.currentPage = page
  }

  goToDetail(id:string){
    this.router.navigate(['/detail', this.currentPage, id]);
  }

}
