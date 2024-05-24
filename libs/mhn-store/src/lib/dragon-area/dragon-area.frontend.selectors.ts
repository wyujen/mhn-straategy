import { DragonAreaEntity } from './dragon-area.entity';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createSelector } from 'mycena-store';
import { map, Observable } from 'rxjs';
import { Cqrs } from '../frontend';
import { FeatureKey, DragonAreaState } from './dragon-area.reducer';
import { IDragonArea } from './dragon-area.model';
import { DragonAreaRelation } from '../relation.interface';

//Pure State
export const selectDragonAreaState: Observable<DragonAreaState> =
  Cqrs.createFeatureSelector<DragonAreaState>(FeatureKey);

export const selectDragonAreaMapList: Observable<Record<string, IDragonArea>> =
  createSelector([selectDragonAreaState], (state: DragonAreaState) => state.entities);
  
export const selectDragonAreaEntities: Observable<IDragonArea[]> = createSelector(
  [selectDragonAreaMapList],
  (state: Record<string, IDragonArea>) => Object.values(state)
);

//Relation Entity
export const selectRelationDragonAreaMapList: Observable<
  Record<string, DragonAreaRelation>
> = Cqrs.createRelationSelector(FeatureKey).pipe(
  map((state: any) => state['entities'])
);

export const selectRelationDragonAreas: Observable<DragonAreaRelation[]> = createSelector(
  [selectRelationDragonAreaMapList],
  (dragonEntities: Record<string, DragonAreaRelation>) => Object.values(dragonEntities)
);
