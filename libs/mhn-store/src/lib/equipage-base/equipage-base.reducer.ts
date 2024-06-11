/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Action, EntityAdapter, EntityState, Reducer, createEntityAdapter } from 'mycena-store';
import { ActionMap, FrontendActionMap } from './equipage-base.actions';
import { EquipageBaseEntity } from './equipage-base.entity';
import { IEquipageBase } from './equipage-base.model';

export const FeatureKey = 'equipageBase';

export interface EquipageBaseState extends EntityState<IEquipageBase> {}

export const adapter: EntityAdapter<IEquipageBase> = createEntityAdapter<IEquipageBase>();

export const initialState: EquipageBaseState = adapter.getInitialState({});

export class equipageBaseReducer extends Reducer<Action, EquipageBaseState> {
  _name = 'equipageBaseReducer';
  constructor() {
    super(initialState, FrontendActionMap);
    this.setEntity(EquipageBaseEntity);
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

export const reducer = new equipageBaseReducer();
