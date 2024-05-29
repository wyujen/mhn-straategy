import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToArray',
  pure: false
})
export class MapToArrayPipe implements PipeTransform {
  transform(value: { [key: string]: any }): any[] {
    if (!value) { return [] }
    return Object.values(value).map(key => (key));
  }
}

@Pipe({
  name: 'mapToArrayPure',
})
export class MapToArrayPurePipe implements PipeTransform {
  transform(value: { [key: string]: any }): any[] {
    if (!value) { return [] }
    return Object.values(value).map(key => (key));
  }
}
