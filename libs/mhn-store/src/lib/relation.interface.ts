import { AreaEntity } from "./area/area.entity"
import { IArea } from "./area/area.model"
import { DragonEntity } from "./dragon/dragon.entity"
import { IDragon } from "./dragon/dragon.model"

import { GroupEntity } from "./group/group.entity"
import { IGroup } from "./group/group.model"
import { UserEntity } from "./user/user.entity"
import { IUser } from "./user/user.model"



export type EntityName =
  | 'user'
  | 'group'
  | 'area'
  | 'dragon'

export type UserRelation = UserEntity & IUser
export type GroupRelation = GroupEntity & IGroup

export interface AreaRelation extends AreaEntity, IArea{
  test: string
}
export interface DragonRelation extends DragonEntity,IDragon{
  test: string
}
