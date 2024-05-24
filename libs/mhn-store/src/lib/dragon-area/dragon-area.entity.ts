/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Entity } from 'mycena-store';
import { IDragonArea } from './dragon-area.model';

export class DragonAreaEntity extends Entity {
  _name = 'DragonAreaEntity';
  constructor(property: IDragonArea) {
    super(property);
  }
}
