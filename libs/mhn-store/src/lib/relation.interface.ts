import { AreaEntity } from "./area/area.entity"
import { IArea } from "./area/area.model"
import { DragonEntity } from "./dragon/dragon.entity"
import { IDragon } from "./dragon/dragon.model"
import { DragonAreaEntity } from "./dragon-area/dragon-area.entity"
import { IDragonArea } from "./dragon-area/dragon-area.model"

import { GroupEntity } from "./group/group.entity"
import { IGroup } from "./group/group.model"
import { UserEntity } from "./user/user.entity"
import { IUser } from "./user/user.model"
import { PropertyEntity } from "./property/property.entity"
import { IProperty } from "./property/property.model"
import { IDragonProperty } from "./dragon-property/dragon-property.model"
import { DragonPropertyEntity } from "./dragon-property/dragon-property.entity"



export type EntityName =
  | 'user'
  | 'group'
  | 'area'
  | 'dragon'
  | 'dragonArea'
  | 'property'
  | 'dragonProperty'

export type UserRelation = UserEntity & IUser
export type GroupRelation = GroupEntity & IGroup
// export type AreaRelation = AreaEntity & IArea
// export type DragonRelation = DragonEntity & IDragon
// export type DragonAreaRelation = DragonAreaEntity & IDragonArea



export interface AreaRelation extends AreaEntity, IArea {
  _toDragonMapList: DragonAreaRelation
}
export interface DragonRelation extends DragonEntity, IDragon {
  _toAreaMapList: DragonAreaRelation

}
export interface DragonAreaRelation extends DragonAreaEntity, IDragonArea {
  _area: AreaRelation,
  _dragon: DragonRelation
}
export interface PropertyRelation extends PropertyEntity, IProperty {
  _dragon: DragonRelation
}

export interface DragonPropertyRelation extends DragonPropertyEntity, IDragonProperty {
  _dragon: DragonRelation
  _property: PropertyRelation
}
