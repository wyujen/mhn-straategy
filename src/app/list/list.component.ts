import { Component, OnInit, Signal, computed, signal } from '@angular/core';
import { selectRelationAreas } from 'libs/mhn-store/src/lib/area/area.frontend.selectors';
import { AreaRelation, DragonRelation, PropertyRelation } from 'libs/mhn-store/src/lib/relation.interface';
import { debounceTime } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'
import { selectRelationPropertys } from 'libs/mhn-store/src/lib/property/property.frontend.selectors';
import { selectRelationDragons } from 'libs/mhn-store/src/lib/dragon/dragon.frontend.selectors';
import { Router } from '@angular/router';

type viewModel = AreaRelation | PropertyRelation | DragonRelation

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
  areaList = toSignal(selectRelationAreas, { initialValue: [] });
  propertyList = toSignal(selectRelationPropertys, { initialValue: [] });
  dragonList = toSignal(selectRelationDragons, { initialValue: [] });

  areaAfterSearch = computed(() => {
    const query = this.userInput()
    return this.areaList().filter(area =>
      area.name.includes(query))
  })

  propertyAfterSearch = computed(() => {
    const query = this.userInput()
    return this.propertyList().filter(property =>
      property.name.includes(query))
  })

  dragonAfterSearch = computed(() => {
    const query = this.userInput()
    return this.dragonList().filter(dragon =>
      dragon.name.includes(query))
  })

  userInput = signal<string>('');

  pageList: IPageCase[] = ['area', 'property', 'dragon']
  currentPage: IPageCase | '' = ''

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  updateInput(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.userInput.set(input);
    console.log('userInput', this.userInput())
  }
  test() {
    console.log('areaList', this.areaList())
  }
  setPage(page: IPageCase) {
    this.currentPage = page
  }

  goToDetail(id: string) {
    this.router.navigate(['/detail', this.currentPage, id]);
  }

}
