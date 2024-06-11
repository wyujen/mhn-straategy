import { Component, Signal, effect, signal, WritableSignal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectRelationDragons } from 'libs/mhn-store/src/lib/dragon/dragon.frontend.selectors';
import { DragonRelation } from 'libs/mhn-store/src/lib/relation.interface';
import { LocalstorageService } from '../localstorage.service';


@Component({
  selector: 'app-equipage',
  templateUrl: './equipage.component.html',
  styleUrls: ['./equipage.component.css']
})
export class EquipageComponent {

  fakeMaterialList = [
    {
      id: '1',
      name: '尖牙'
    },
    {
      id: '2',
      name: '甲殼'
    },
    {
      id: '3',
      name: '羽毛'
    },
    {
      id: '4',
      name: '龍玉'
    },
    {
      id: '5',
      name: '逆鱗'
    },
  ]

  dragonList = toSignal(selectRelationDragons, { initialValue: [] });
  // armorList = ['head', 'chest', 'hand', 'wasit', 'foot']
  armorList = signal(['頭', '胸', '手', '腰', '腳'])
  currenDragon: WritableSignal<any> = signal<any>(null)
  currenEquipage: WritableSignal<any> = signal<any>(null)

  finalEquipage = computed(() => {
    const dragon = this.currenDragon()?.name ?? ''
    const equipage = this.currenEquipage() ?? ''
    let materialList = []
    if (equipage) {
      const randomNumber = Math.random()
      const integerNumber = Math.floor(randomNumber * 5)

      const fakeMaterial = {
        ...this.fakeMaterialList[integerNumber],
        number: Math.floor(randomNumber * 10) + 1
      }
      materialList.push(fakeMaterial)
    }
    return {
      dragon,
      equipage,
      materialList
    }
  })


  constructor(
    private storageS: LocalstorageService
  ) {
    // effect(() => {
    //   console.log('dragon', this.dragonList())
    // })
  }

  setCurrentDragon(input: DragonRelation) {
    this.currenDragon.set(input)
    this.currenEquipage.set(null)
  }
  setCurrentEquipage(input: string) {
    this.currenEquipage.set(input)
  }

  setCar() {
    const car = this.storageS.getFromSessionStorage('car') ?? []
    let currentCar = {
      dragon: this.finalEquipage().dragon,
      equipage: this.finalEquipage().equipage,
      materialList: this.finalEquipage().materialList,
    }

    car.push(currentCar)

    this.storageS.saveToSessionStorage('car', car)

  }


}
