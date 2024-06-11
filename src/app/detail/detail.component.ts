import { Component, OnInit, Signal, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPageCase } from '../list/list.component';
import { AreaRelation, DragonRelation, PropertyRelation } from 'libs/mhn-store/src/lib/relation.interface';
import { selectRelationAreaMapList } from 'libs/mhn-store/src/lib/area/area.frontend.selectors';
import { debounceTime } from 'rxjs';
import { selectRelationPropertyMapList } from 'libs/mhn-store/src/lib/property/property.frontend.selectors';
import { selectRelationDragonMapList } from 'libs/mhn-store/src/lib/dragon/dragon.frontend.selectors';
import { Location } from '@angular/common';

// export type DetailVM = | AreaRelation | PropertyRelation | DragonRelation | null;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  page: IPageCase = '';
  id: string = '';

  isLoading: boolean = false;

  currentDetail: WritableSignal<any> = signal<any>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.paramMap.subscribe(params => {
      this.page = params.get('page') as IPageCase;
      this.id = params.get('id') ?? '';
      this.loadData()
    });
  }

  loadData() {
    if (this.page == 'area') {
      selectRelationAreaMapList.pipe(debounceTime(1000)).subscribe(
        (data) => {
          this.currentDetail.set(data[this.id])
          this.isLoading = false
        }
      )
    } else if (this.page == 'dragon') {
      selectRelationDragonMapList.pipe(debounceTime(1000)).subscribe(
        (data) => {
          this.currentDetail.set(data[this.id])
          this.isLoading = false
          console.log('data', data)
        }
      )
    } else if (this.page == 'property') {
      selectRelationPropertyMapList.pipe(debounceTime(1000)).subscribe(
        (data) => {
          this.currentDetail.set(data[this.id])
          this.isLoading = false
        }
      )
    } else {
      console.error('no page ')
    }
  }

  get() {
    console.log('this.currentDetail()', this.currentDetail())
  }
  goToDetail(pageName: string, id: string) {
    this.isLoading = true
    this.currentDetail = signal<any>(null)
    this.router.navigate(['/detail', pageName, id]);
  }
  goToEdit() {
    this.router.navigate(['/edit', this.page, this.id]);
  }
  back() {
    this.location.back()
  }

}
