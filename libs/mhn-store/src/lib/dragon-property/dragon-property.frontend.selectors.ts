import { DragonPropertyEntity } from './dragon-property.entity';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createSelector } from 'mycena-store';
import { map, Observable } from 'rxjs';
import { Cqrs } from '../frontend';
import { FeatureKey, DragonPropertyState } from './dragon-property.reducer';
import { IDragonProperty } from './dragon-property.model';
import { DragonPropertyRelation } from '../relation.interface';

//Pure State
export const selectDragonPropertyState: Observable<DragonPropertyState> =
  Cqrs.createFeatureSelector<DragonPropertyState>(FeatureKey);

export const selectDragonPropertyMapList: Observable<Record<string, IDragonProperty>> =
  createSelector([selectDragonPropertyState], (state: DragonPropertyState) => state.entities);
  
export const selectDragonPropertyEntities: Observable<IDragonProperty[]> = createSelector(
  [selectDragonPropertyMapList],
  (state: Record<string, IDragonProperty>) => Object.values(state)
);

//Relation Entity
export const selectRelationDragonPropertyMapList: Observable<
  Record<string, DragonPropertyRelation>
> = Cqrs.createRelationSelector(FeatureKey).pipe(
  map((state: any) => state['entities'])
);

export const selectRelationDragonPropertys: Observable<DragonPropertyRelation[]> = createSelector(
  [selectRelationDragonPropertyMapList],
  (dragonEntities: Record<string, DragonPropertyRelation>) => Object.values(dragonEntities)
);
