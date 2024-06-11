import { Component, WritableSignal, computed, signal } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  currenEquipageList: WritableSignal<any> = signal<any>(null)
  // sumManterial = computed(() => {

  //   const car = this.currenEquipageList() ?? []
  //   const sum = car.reduce((acc: any, current: any) => {
  //     const material = current.materialList[0]
  //     if (acc.get(material.id)) {
  //       const load = acc.get(material.id)
  //       const acount = load.number + material.number
  //       const data = {
  //         ...load,
  //         number: acount
  //       }
  //       acc.set(material.id, data)
  //     } else {
  //       acc.set(material.id, material)
  //     }
  //     return acc
  //   }, new Map<string, any>())
  //   return sum
  // })
  sumManterial = computed(() => {
    const car: any[] = this.currenEquipageList() ?? [];

    const sum = car.reduce((acc: Map<string, any>, current: any) => {
      const material = current.materialList[0];
      if (material) {
        if (acc.has(material.id)) {
          const load = acc.get(material.id)!;
          const acount = load.number + material.number;
          const data: any = {
            ...load,
            number: acount
          };
          acc.set(material.id, data);
        } else {
          acc.set(material.id, material);
        }
      }
      return acc;
    }, new Map<string, any>());
    // console.log('aaaaa', Array.from(sum.values()))
    return Array.from(sum.values())
  })


  constructor(
    private storageS: LocalstorageService
  ) {
    this.currenEquipageList.set(this.storageS.getFromSessionStorage('car'))
  }

  clean() {
    this.storageS.removeFromSessionStorage('car')
    this.currenEquipageList.set(null)
  }

}
