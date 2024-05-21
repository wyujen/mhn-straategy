import { UserEntity } from './user.entity';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createSelector } from 'mycena-store';
import { map, Observable } from 'rxjs';
import { Cqrs } from '../frontend';
import { FeatureKey, UserState } from './user.reducer';
import { IUser } from './user.model';
import { UserRelation } from '../relation.interface';

//Pure State
export const selectUserState: Observable<UserState> =
  Cqrs.createFeatureSelector<UserState>(FeatureKey);

export const selectUserMapList: Observable<Record<string, IUser>> =
  createSelector([selectUserState], (state: UserState) => state.entities);
  
export const selectUserEntities: Observable<IUser[]> = createSelector(
  [selectUserMapList],
  (state: Record<string, IUser>) => Object.values(state)
);

//Relation Entity
export const selectRelationUserMapList: Observable<
  Record<string, UserRelation>
> = Cqrs.createRelationSelector(FeatureKey).pipe(
  map((state: any) => state['entities'])
);

export const selectRelationUsers: Observable<UserRelation[]> = createSelector(
  [selectRelationUserMapList],
  (userEntities: Record<string, UserRelation>) => Object.values(userEntities)
);
