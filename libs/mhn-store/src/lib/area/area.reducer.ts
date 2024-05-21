/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Action, EntityAdapter, EntityState, Reducer, createEntityAdapter } from 'mycena-store';
import { ActionMap, FrontendActionMap } from './area.actions';
import { AreaEntity } from './area.entity';
import { IArea } from './area.model';

export const FeatureKey = 'area';

export interface AreaState extends EntityState<IArea> {}

export const adapter: EntityAdapter<IArea> = createEntityAdapter<IArea>();

export const initialState: AreaState = adapter.getInitialState({});

export class areaReducer extends Reducer<Action, AreaState> {
  _name = 'areaReducer';
  constructor() {
    super(initialState, FrontendActionMap);
    this.setEntity(AreaEntity);
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

export const reducer = new areaReducer();
