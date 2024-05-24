/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Action, EntityAdapter, EntityState, Reducer, createEntityAdapter } from 'mycena-store';
import { ActionMap, FrontendActionMap } from './property.actions';
import { PropertyEntity } from './property.entity';
import { IProperty } from './property.model';

export const FeatureKey = 'property';

export interface PropertyState extends EntityState<IProperty> {}

export const adapter: EntityAdapter<IProperty> = createEntityAdapter<IProperty>();

export const initialState: PropertyState = adapter.getInitialState({});

export class propertyReducer extends Reducer<Action, PropertyState> {
  _name = 'propertyReducer';
  constructor() {
    super(initialState, FrontendActionMap);
    this.setEntity(PropertyEntity);
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

export const reducer = new propertyReducer();
