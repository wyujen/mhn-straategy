import { Action } from 'mycena-store';
import { IGroup } from './group.model';

export const CommonActionMap = {
  TestGroup: '[Group] Testing Group',
};

export const BackendActionMap = {
  ...CommonActionMap,
  CreateGroup: '[Group] Create Group',
  ReadGroup: '[Group] Read Group',
  UpdateGroup: '[Group] Update Group',
  DeleteGroup: '[Group] Delete Group',
};

export const FrontendActionMap = {
  ...CommonActionMap,
  CreateGroup: '[Group] Create Group',
  ReadGroup: '[Group] Read Group',
  UpdateGroup: '[Group] Update Group',
  DeleteGroup: '[Group] Delete Group',
  LoginGroup: '[Group] Login Group',
};

export const ActionMap = {
  ...BackendActionMap,
  ...FrontendActionMap,
};

export class LoginGroup extends Action {
  readonly type: string = ActionMap.LoginGroup;
  constructor(payload?: never) {
    super();
  }
}

export class CreateGroup extends Action {
  readonly type: string = ActionMap.CreateGroup;
  constructor(public payload: IGroup) {
    super();
  }
}

export class ReadGroup extends Action {
  readonly type: string = ActionMap.ReadGroup;
  constructor() {
    super();
  }
}

export class UpdateGroup extends Action {
  readonly type: string = ActionMap.UpdateGroup;
  constructor(public payload: IGroup[]) {
    super();
  }
}

export class DeleteGroup extends Action {
  readonly type: string = ActionMap.DeleteGroup;
  constructor(public payload: string[]) {
    super();
  }
}

// export type ActionUnion = LoginAuth | LoginGroup | CreateGroup | ReadGroup | UpdateGroup | DeleteGroup;
