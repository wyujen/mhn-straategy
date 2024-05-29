import { ChangeDetectorRef, Component, NgZone, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPageCase } from '../list/list.component';
import { AreaRelation, DragonAreaRelation, DragonRelation, PropertyRelation } from 'libs/mhn-store/src/lib/relation.interface';
import { selectRelationAreaMapList } from 'libs/mhn-store/src/lib/area/area.frontend.selectors';
import { debounceTime } from 'rxjs';
import { selectRelationPropertyMapList } from 'libs/mhn-store/src/lib/property/property.frontend.selectors';
import { selectRelationDragonMapList } from 'libs/mhn-store/src/lib/dragon/dragon.frontend.selectors';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from 'libs/mhn-store/src/lib/frontend';
import { RemoveMany, SetMany } from 'mycena-store';

import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  page: IPageCase = '';
  id: string = '';

  isLoading: boolean = false;

  currentDetail: WritableSignal<any> = signal<any>(null);

  toBeDelete: WritableSignal<any> = signal<any>(null);

  sublayerDragonVM = computed<DragonAreaRelation[]>(() => {
    if (this.page == 'area') {
      const value = this.currentDetail()._toDragonMap
      console.log('aaaaa', value)
      return Object.values(value).map(key => (key as DragonAreaRelation));
    } else {
      return []
    }
  })

  baseEditForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected fb: FormBuilder,
    private location: Location,
    private ngZone: NgZone

  ) {
    effect(() => {
      const detail = this.currentDetail();
      console.log('detail', detail)
      if (detail) {
        console.log('go set', detail.name)
        this.baseEditForm.patchValue({
          name: detail.name
        });
      }
    });
  }

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
          this.ngZone.run(() => {
            this.currentDetail.set(data[this.id])
            this.isLoading = false
          })

        }
      )
    } else if (this.page == 'dragon') {
      selectRelationDragonMapList.pipe(debounceTime(1000)).subscribe(
        (data) => {
          this.ngZone.run(() => {
            this.currentDetail.set(data[this.id])
            this.isLoading = false
          })

        }
      )
    } else if (this.page == 'property') {
      selectRelationPropertyMapList.pipe(debounceTime(1000)).subscribe(
        (data) => {
          this.ngZone.run(() => {
            this.currentDetail.set(data[this.id])
            this.isLoading = false
          })
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
  deleteRelation(type: string, id: string) {
    Store.dispatch(new RemoveMany(type, [id]))

    this.loadData()
  }
  test(values: any) {
    console.log('values', values.id)
  }

  save() {
    const formValue = this.baseEditForm.getRawValue()
    Store.dispatch(new SetMany(this.page, [{ id: this.id, name: formValue.name }]))
    this.location.back()
  }
  back() {
    this.location.back()
  }

}
