/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Entity } from 'mycena-store';
import { IGroup } from './group.model';

export class GroupEntity extends Entity {
  _name = 'GroupEntity';
  constructor(property: IGroup) {
    super(property);
  }
}
