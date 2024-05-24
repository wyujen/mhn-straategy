// import { createSelector } from 'mycena-store';
// import { map, Observable } from 'rxjs';
// import { Cqrs, StoreWithRelation } from '../backend';
// import { UserRelation, selectRelationEntities } from '../relation.interface';
// import { User } from './user.model';
// import { FeatureKey, UserState } from './user.reducer';

// //Pure State
// export const selectUserState: Observable<UserState> =
//   Cqrs.createFeatureSelector<UserState>(FeatureKey);
// export const selectUserEntities: Observable<User[]> = createSelector(
//   [selectUserState],
//   (state: UserState) => Object.values(state.entities)
// );

// //Relation Entity
// export const selectRelationUserMapList: Observable<
//   Record<string, UserRelation>
// > = Cqrs.createRelationSelector(FeatureKey).pipe(
//   map((state: any) => state['entities'])
// );

// export const selectRelationUsers: Observable<UserRelation[]> = createSelector(
//   [selectRelationUserMapList],
//   (userEntities: Record<string, UserRelation>) => Object.values(userEntities)
// );
