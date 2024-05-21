import { AreaEntity } from "./area/area.entity"
import { IArea } from "./area/area.model"

import { GroupEntity } from "./group/group.entity"
import { IGroup } from "./group/group.model"
import { UserEntity } from "./user/user.entity"
import { IUser } from "./user/user.model"



export type EntityName =
  | 'user'
  | 'group'
  | 'area'

export type UserRelation = UserEntity & IUser
export type GroupRelation = GroupEntity & IGroup

export interface AreaRelation extends AreaEntity, IArea{
  test: string
}
