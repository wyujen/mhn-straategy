/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Action, EntityAdapter, EntityState, Reducer, createEntityAdapter } from 'mycena-store';
import { ActionMap, FrontendActionMap } from './user.actions';
import { UserEntity } from './user.entity';
import { IUser } from './user.model';

export const FeatureKey = 'user';

export interface UserState extends EntityState<IUser> {}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: UserState = adapter.getInitialState({});

export class UserReducer extends Reducer<Action, UserState> {
  _name = 'UserReducer';
  constructor() {
    super(initialState, FrontendActionMap);
    this.setEntity(UserEntity);
  }
  async *mapEventToState(event: any): AsyncIterableIterator<any> {
    const newState = await this.defaultActionState(event);
    switch (event['type']) {
      default: {
        yield await newState;
        break;
      }
    }
  }
}

export const reducer = new UserReducer();
