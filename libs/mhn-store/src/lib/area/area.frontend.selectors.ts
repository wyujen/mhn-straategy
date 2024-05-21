import { AreaEntity } from './area.entity';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createSelector } from 'mycena-store';
import { map, Observable } from 'rxjs';
import { Cqrs } from '../frontend';
import { FeatureKey, AreaState } from './area.reducer';
import { IArea } from './area.model';
import { AreaRelation } from '../relation.interface';

//Pure State
export const selectAreaState: Observable<AreaState> =
  Cqrs.createFeatureSelector<AreaState>(FeatureKey);

export const selectAreaMapList: Observable<Record<string, IArea>> =
  createSelector([selectAreaState], (state: AreaState) => state.entities);
  
export const selectAreaEntities: Observable<IArea[]> = createSelector(
  [selectAreaMapList],
  (state: Record<string, IArea>) => Object.values(state)
);

//Relation Entity
export const selectRelationAreaMapList: Observable<
  Record<string, AreaRelation>
> = Cqrs.createRelationSelector(FeatureKey).pipe(
  map((state: any) => state['entities'])
);

export const selectRelationAreas: Observable<AreaRelation[]> = createSelector(
  [selectRelationAreaMapList],
  (areaEntities: Record<string, AreaRelation>) => Object.values(areaEntities)
);
