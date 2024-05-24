/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Action, EntityAdapter, EntityState, Reducer, createEntityAdapter } from 'mycena-store';
import { ActionMap, FrontendActionMap } from './dragon-area.actions';
import { DragonAreaEntity } from './dragon-area.entity';
import { IDragonArea } from './dragon-area.model';

export const FeatureKey = 'dragonArea';

export interface DragonAreaState extends EntityState<IDragonArea> {}

export const adapter: EntityAdapter<IDragonArea> = createEntityAdapter<IDragonArea>();

export const initialState: DragonAreaState = adapter.getInitialState({});

export class dragonAreaReducer extends Reducer<Action, DragonAreaState> {
  _name = 'dragonAreaReducer';
  constructor() {
    super(initialState, FrontendActionMap);
    this.setEntity(DragonAreaEntity);
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

export const reducer = new dragonAreaReducer();
