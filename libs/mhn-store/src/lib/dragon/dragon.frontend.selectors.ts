import { DragonEntity } from './dragon.entity';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createSelector } from 'mycena-store';
import { map, Observable } from 'rxjs';
import { Cqrs } from '../frontend';
import { FeatureKey, DragonState } from './dragon.reducer';
import { IDragon } from './dragon.model';
import { DragonRelation } from '../relation.interface';

//Pure State
export const selectDragonState: Observable<DragonState> =
  Cqrs.createFeatureSelector<DragonState>(FeatureKey);

export const selectDragonMapList: Observable<Record<string, IDragon>> =
  createSelector([selectDragonState], (state: DragonState) => state.entities);
  
export const selectDragonEntities: Observable<IDragon[]> = createSelector(
  [selectDragonMapList],
  (state: Record<string, IDragon>) => Object.values(state)
);

//Relation Entity
export const selectRelationDragonMapList: Observable<
  Record<string, DragonRelation>
> = Cqrs.createRelationSelector(FeatureKey).pipe(
  map((state: any) => state['entities'])
);

export const selectRelationDragons: Observable<DragonRelation[]> = createSelector(
  [selectRelationDragonMapList],
  (dragonEntities: Record<string, DragonRelation>) => Object.values(dragonEntities)
);
