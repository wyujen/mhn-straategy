/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Action, EntityAdapter, EntityState, Reducer, createEntityAdapter } from 'mycena-store';
import { ActionMap, FrontendActionMap } from './group.actions';
import { GroupEntity } from './group.entity';
import { IGroup } from './group.model';

export const FeatureKey = 'group';

export interface GroupState extends EntityState<IGroup> {}

export const adapter: EntityAdapter<IGroup> = createEntityAdapter<IGroup>();

export const initialState: GroupState = adapter.getInitialState({});

export class GroupReducer extends Reducer<Action, GroupState> {
  _name = 'GroupReducer';
  constructor() {
    super(initialState, FrontendActionMap);
    this.setEntity(GroupEntity);
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

export const reducer = new GroupReducer();
