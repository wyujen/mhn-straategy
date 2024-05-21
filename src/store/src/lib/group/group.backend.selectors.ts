// import { createSelector } from 'mycena-store';
// import { map, Observable } from 'rxjs';
// import { Cqrs, StoreWithRelation } from '../backend';
// import { GroupRelation, selectRelationEntities } from '../relation.interface';
// import { Group } from './group.model';
// import { FeatureKey, GroupState } from './group.reducer';

// //Pure State
// export const selectGroupState: Observable<GroupState> =
//   Cqrs.createFeatureSelector<GroupState>(FeatureKey);
// export const selectGroupEntities: Observable<Group[]> = createSelector(
//   [selectGroupState],
//   (state: GroupState) => Object.values(state.entities)
// );

// //Relation Entity
// export const selectRelationGroupMapList: Observable<
//   Record<string, GroupRelation>
// > = Cqrs.createRelationSelector(FeatureKey).pipe(
//   map((state: any) => state['entities'])
// );

// export const selectRelationGroups: Observable<GroupRelation[]> = createSelector(
//   [selectRelationGroupMapList],
//   (groupEntities: Record<string, GroupRelation>) => Object.values(groupEntities)
// );
