import { RelationshipFromJDL } from 'mycena-store';
import * as fromUser from './user/user.reducer';
import * as fromGroup from './group/group.reducer';
import * as fromArea from './area/area.reducer'
import * as fromDragon from './dragon/dragon.reducer'
import * as fromDragonArea from './dragon-area/dragon-area.reducer'
import * as fromProperty from './property/property.reducer'
import * as fromDragonProperty from './dragon-property/dragon-property.reducer'
import * as fromEquipageBase from './equipage-base/equipage-base.reducer'

export function taipowerStore(): string {
  return 'mhn-store';
}

export interface CommonStoreState {
  user: fromUser.UserState;
  group: fromGroup.GroupState;
  area: fromArea.AreaState;
  dragon: fromDragon.DragonState;
  dragonArea: fromDragonArea.DragonAreaState;
  property: fromProperty.PropertyState;
  dragonProperty: fromDragonProperty.DragonPropertyState;
  equipageBase: fromEquipageBase.EquipageBaseState;

}

export const CommonReducers = {
  user: fromUser.reducer,
  group: fromGroup.reducer,
  area: fromArea.reducer,
  dragon: fromDragon.reducer,
  dragonArea: fromDragonArea.reducer,
  property: fromProperty.reducer,
  dragonProperty: fromDragonProperty.reducer,
  equipageBase: fromEquipageBase.reducer
};

export const CommonFeatureKeys = {
  user: fromUser.FeatureKey,
  group: fromGroup.FeatureKey,
  area: fromArea.FeatureKey,
  dragon: fromDragon.FeatureKey,
  dragonArea: fromDragonArea.FeatureKey,
  property: fromProperty.FeatureKey,
  dragonProperty: fromDragonProperty.FeatureKey,
  equipageBase: fromEquipageBase.FeatureKey
};

export const CommonRelationshipByType: RelationshipFromJDL = {
  OneToOne: new Set([
    'Dragon{equipageBase(dragonId)} to EquipageBase{dragon(id)}',
    'EquipageBase{dragon(equipageBaseId)} to Dragon{equipageBase(id)}',
  ]),
  OneToMany: new Set([
    'Group{aaaaauserMap(groupId)} to User{aaaaagroup(id)}',
    'Area{toDragonMap(areaId)} to DragonArea{area(id)}',
    'Dragon{toAreaMap(dragonId)} to DragonArea{dragon(id)}',

    'Property{toDragonMap(propertyId)} to DragonProperty{property(id)}',
    'Dragon{toPropertyMap(dragonId)} to DragonProperty{dragon(id)}',
    // 'Property{equipageBase(propertyId)} to EquipageBase{property(id)}'
  ]),
  ManyToMany: new Set([

  ]),
};
