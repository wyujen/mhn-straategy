import { RelationshipFromJDL } from 'mycena-store';
import * as fromUser from './user/user.reducer';
import * as fromGroup from './group/group.reducer';
import * as fromArea from './area/area.reducer'
import * as fromDragon from './dragon/dragon.reducer'
import * as fromDragon_Area from './dragon_area/dragon_area.reducer'





export function taipowerStore(): string {
  return 'mhn-store';
}

export interface CommonStoreState {
  user: fromUser.UserState;
  group: fromGroup.GroupState;
  area: fromArea.AreaState;
  dragon: fromDragon.DragonState;
  dragon_area: fromDragon_Area.Dragon_AreaState;
}

export const CommonReducers = {
  user: fromUser.reducer,
  group: fromGroup.reducer,
  area: fromArea.reducer,
  dragon: fromDragon.reducer,

  dragon_area: fromDragon_Area.reducer
};

export const CommonFeatureKeys = {
  user: fromUser.FeatureKey,
  group: fromGroup.FeatureKey,
  area: fromArea.FeatureKey,
  dragon: fromDragon.FeatureKey,

  dragon_area: fromDragon_Area.FeatureKey

};

export const CommonRelationshipByType: RelationshipFromJDL = {
  OneToOne: new Set([
  ]),
  OneToMany: new Set([
    'Group{userMap(groupId)} to User{group(id)}',
    'Area{dragonMap(areaId)} to Dragon{Area(id)}',
    'Dragon{areaMap(dragonId)} to Area{Dragon(id)}',
    
  ]),
  ManyToMany: new Set([
    
  ]),
};
