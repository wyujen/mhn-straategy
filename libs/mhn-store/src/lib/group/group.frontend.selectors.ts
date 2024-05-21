import { GroupEntity } from './group.entity';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createSelector } from 'mycena-store';
import { map, Observable } from 'rxjs';
import { Cqrs } from '../frontend';
import { FeatureKey, GroupState } from './group.reducer';
import { IGroup } from './group.model';
import { GroupRelation } from '../relation.interface';

//Pure State
export const selectGroupState: Observable<GroupState> =
  Cqrs.createFeatureSelector<GroupState>(FeatureKey);

export const selectGroupMapList: Observable<Record<string, IGroup>> =
  createSelector([selectGroupState], (state: GroupState) => state.entities);
  
export const selectGroupEntities: Observable<IGroup[]> = createSelector(
  [selectGroupMapList],
  (state: Record<string, IGroup>) => Object.values(state)
);

//Relation Entity
export const selectRelationGroupMapList: Observable<
  Record<string, GroupRelation>
> = Cqrs.createRelationSelector(FeatureKey).pipe(
  map((state: any) => state['entities'])
);

export const selectRelationGroups: Observable<GroupRelation[]> = createSelector(
  [selectRelationGroupMapList],
  (groupEntities: Record<string, GroupRelation>) => Object.values(groupEntities)
);
