/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Action, EntityAdapter, EntityState, Reducer, createEntityAdapter } from 'mycena-store';
import { ActionMap, FrontendActionMap } from './dragon_area.actions';
import { Dragon_AreaEntity } from './dragon_area.entity';
import { IDragon_Area } from './dragon_area.model';

export const FeatureKey = 'dragon_area';

export interface Dragon_AreaState extends EntityState<IDragon_Area> {}

export const adapter: EntityAdapter<IDragon_Area> = createEntityAdapter<IDragon_Area>();

export const initialState: Dragon_AreaState = adapter.getInitialState({});

export class dragon_areaReducer extends Reducer<Action, Dragon_AreaState> {
  _name = 'dragon_areaReducer';
  constructor() {
    super(initialState, FrontendActionMap);
    this.setEntity(Dragon_AreaEntity);
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

export const reducer = new dragon_areaReducer();
