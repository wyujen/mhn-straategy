import { GroupEntity } from "./group/group.entity"
import { IGroup } from "./group/group.model"
import { UserEntity } from "./user/user.entity"
import { IUser } from "./user/user.model"



export type EntityName =
  | 'user'
  | 'group'

export type UserRelation = UserEntity & IUser
export type GroupRelation = GroupEntity & IGroup