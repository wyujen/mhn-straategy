/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Action, EntityAdapter, EntityState, Reducer, createEntityAdapter } from 'mycena-store';
import { ActionMap, FrontendActionMap } from './dragon-property.actions';
import { DragonPropertyEntity } from './dragon-property.entity';
import { IDragonProperty } from './dragon-property.model';

export const FeatureKey = 'dragonProperty';

export interface DragonPropertyState extends EntityState<IDragonProperty> {}

export const adapter: EntityAdapter<IDragonProperty> = createEntityAdapter<IDragonProperty>();

export const initialState: DragonPropertyState = adapter.getInitialState({});

export class dragonPropertyReducer extends Reducer<Action, DragonPropertyState> {
  _name = 'dragonPropertyReducer';
  constructor() {
    super(initialState, FrontendActionMap);
    this.setEntity(DragonPropertyEntity);
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

export const reducer = new dragonPropertyReducer();
