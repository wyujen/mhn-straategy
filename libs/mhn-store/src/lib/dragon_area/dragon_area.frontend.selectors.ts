import { Dragon_AreaEntity } from './dragon_area.entity';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createSelector } from 'mycena-store';
import { map, Observable } from 'rxjs';
import { Cqrs } from '../frontend';
import { FeatureKey, Dragon_AreaState } from './dragon_area.reducer';
import { IDragon_Area } from './dragon_area.model';
import { Dragon_AreaRelation } from '../relation.interface';

//Pure State
export const selectDragon_AreaState: Observable<Dragon_AreaState> =
  Cqrs.createFeatureSelector<Dragon_AreaState>(FeatureKey);

export const selectDragon_AreaMapList: Observable<Record<string, IDragon_Area>> =
  createSelector([selectDragon_AreaState], (state: Dragon_AreaState) => state.entities);
  
export const selectDragon_AreaEntities: Observable<IDragon_Area[]> = createSelector(
  [selectDragon_AreaMapList],
  (state: Record<string, IDragon_Area>) => Object.values(state)
);

//Relation Entity
export const selectRelationDragon_AreaMapList: Observable<
  Record<string, Dragon_AreaRelation>
> = Cqrs.createRelationSelector(FeatureKey).pipe(
  map((state: any) => state['entities'])
);

export const selectRelationDragon_Areas: Observable<Dragon_AreaRelation[]> = createSelector(
  [selectRelationDragon_AreaMapList],
  (dragonEntities: Record<string, Dragon_AreaRelation>) => Object.values(dragonEntities)
);
