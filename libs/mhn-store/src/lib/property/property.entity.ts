/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Entity } from 'mycena-store';
import { IProperty } from './property.model';

export class PropertyEntity extends Entity {
  _name = 'PropertyEntity';
  constructor(property: IProperty) {
    super(property);
  }
}
