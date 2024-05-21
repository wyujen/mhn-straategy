import { RelationshipFromJDL } from 'mycena-store';
import * as fromUser from './user/user.reducer';
import * as fromGroup from './group/group.reducer';
import * as fromArea from './area/area.reducer'
import * as fromDragon from './dragon/dragon.reducer'




export function taipowerStore(): string {
  return 'mhn-store';
}

export interface CommonStoreState {
  user: fromUser.UserState;
  group: fromGroup.GroupState;
  area: fromArea.AreaState;
  dragon: fromDragon.DragonState;
}

export const CommonReducers = {
  user: fromUser.reducer,
  group: fromGroup.reducer,
  area: fromArea.reducer,
  dragon: fromDragon.reducer,
};

export const CommonFeatureKeys = {
  user: fromUser.FeatureKey,
  group: fromGroup.FeatureKey,
  area: fromArea.FeatureKey,
  dragon: fromDragon.FeatureKey

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
