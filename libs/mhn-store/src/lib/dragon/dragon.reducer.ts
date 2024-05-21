/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Action, EntityAdapter, EntityState, Reducer, createEntityAdapter } from 'mycena-store';
import { ActionMap, FrontendActionMap } from './dragon.actions';
import { DragonEntity } from './dragon.entity';
import { IDragon } from './dragon.model';

export const FeatureKey = 'dragon';

export interface DragonState extends EntityState<IDragon> {}

export const adapter: EntityAdapter<IDragon> = createEntityAdapter<IDragon>();

export const initialState: DragonState = adapter.getInitialState({});

export class dragonReducer extends Reducer<Action, DragonState> {
  _name = 'dragonReducer';
  constructor() {
    super(initialState, FrontendActionMap);
    this.setEntity(DragonEntity);
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

export const reducer = new dragonReducer();
