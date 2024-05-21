import { RelationshipFromJDL } from 'mycena-store';
import * as fromUser from './user/user.reducer';
import * as fromGroup from './group/group.reducer';


export function taipowerStore(): string {
  return 'taipower-store';
}

export interface CommonStoreState {
  user: fromUser.UserState;
  group: fromGroup.GroupState;
}

export const CommonReducers = {
  user: fromUser.reducer,
  group: fromGroup.reducer
};

export const CommonFeatureKeys = {
  user: fromUser.FeatureKey,
  group: fromGroup.FeatureKey,
};

export const CommonRelationshipByType: RelationshipFromJDL = {
  OneToOne: new Set([
  ]),
  OneToMany: new Set([
    'Group{userMap(groupId)} to User{group(id)}',
  ]),
  ManyToMany: new Set([
    
  ]),
};
