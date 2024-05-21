/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Entity } from 'mycena-store';
import { IUser } from './user.model';

export class UserEntity extends Entity {
  _name = 'UserEntity';
  constructor(property: IUser) {
    super(property);
  }
}
