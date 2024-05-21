/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CQRS, RelationshipFromJDL, Main } from 'mycena-store';
import {
  CommonFeatureKeys,
  CommonReducers,
  CommonRelationshipByType,
  CommonStoreState,
} from './store';

// import { StoreState } from './relation.interface';

export interface StoreState extends CommonStoreState {}

export const Reducers = {
  ...CommonReducers,
};

export const FeatureKeys = {
  ...CommonFeatureKeys,
};

export const RelationshipByTypeMap: RelationshipFromJDL = {
  ...CommonRelationshipByType,
};

export const Cqrs = new CQRS<StoreState, typeof Reducers>();

Cqrs.setAppModuleType('angular');
Cqrs.forRootReducers(Reducers);
Cqrs.seRelationshipFromJDL(RelationshipByTypeMap);

export const Store = Cqrs.Store;
export const StoreWithRelation = Store.withRelation$;
export const StoreSate = Store.state;
export const Actions = Cqrs.Actions;

Main.printMode = 'none'
