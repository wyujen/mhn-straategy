/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Entity } from 'mycena-store';
import { IArea } from './area.model';

export class AreaEntity extends Entity {
  _name = 'AreaEntity';
  constructor(property: IArea) {
    super(property);
  }
}
