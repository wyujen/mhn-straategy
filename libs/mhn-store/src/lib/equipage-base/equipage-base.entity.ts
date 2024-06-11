/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Entity } from 'mycena-store';
import { IEquipageBase } from './equipage-base.model';

export class EquipageBaseEntity extends Entity {
  _name = 'EquipageBaseEntity';
  constructor(property: IEquipageBase) {
    super(property);
  }
}
