/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Entity } from 'mycena-store';
import { IDragon } from './dragon.model';

export class DragonEntity extends Entity {
  _name = 'DragonEntity';
  constructor(property: IDragon) {
    super(property);
  }
}
