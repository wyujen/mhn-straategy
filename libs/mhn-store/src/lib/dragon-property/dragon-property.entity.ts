/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Entity } from 'mycena-store';
import { IDragonProperty } from './dragon-property.model';

export class DragonPropertyEntity extends Entity {
  _name = 'DragonPropertyEntity';
  constructor(property: IDragonProperty) {
    super(property);
  }
}
