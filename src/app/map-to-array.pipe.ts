import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToArray'
})
export class MapToArrayPipe implements PipeTransform {

  transform(value: { [key: string]: any }): any[] {
    if (!value) { return [] }
    // console.log('value', value)
    // console.log('value', Object.values(value).map(key => ({ key })))

    return Object.values(value).map(key => (key));
  }

}
