/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Entity } from 'mycena-store';
import { IDragon_Area } from './dragon_area.model';

export class Dragon_AreaEntity extends Entity {
  _name = 'Dragon_AreaEntity';
  constructor(property: IDragon_Area) {
    super(property);
  }
}
