import { Action } from 'mycena-store';
import { IUser } from './area.model';

export const CommonActionMap = {
  TestUser: '[User] Testing User',
};

export const BackendActionMap = {
  ...CommonActionMap,
  CreateUser: '[User] Create User',
  ReadUser: '[User] Read User',
  UpdateUser: '[User] Update User',
  DeleteUser: '[User] Delete User',
};

export const FrontendActionMap = {
  ...CommonActionMap,
  CreateUser: '[User] Create User',
  ReadUser: '[User] Read User',
  UpdateUser: '[User] Update User',
  DeleteUser: '[User] Delete User',
  LoginUser: '[User] Login User',
};

export const ActionMap = {
  ...BackendActionMap,
  ...FrontendActionMap,
};

export class LoginUser extends Action {
  readonly type: string = ActionMap.LoginUser;
  constructor(payload?: never) {
    super();
  }
}

export class CreateUser extends Action {
  readonly type: string = ActionMap.CreateUser;
  constructor(public payload: IUser) {
    super();
  }
}

export class ReadUser extends Action {
  readonly type: string = ActionMap.ReadUser;
  constructor() {
    super();
  }
}

export class UpdateUser extends Action {
  readonly type: string = ActionMap.UpdateUser;
  constructor(public payload: IUser[]) {
    super();
  }
}

export class DeleteUser extends Action {
  readonly type: string = ActionMap.DeleteUser;
  constructor(public payload: string[]) {
    super();
  }
}

// export type ActionUnion = LoginAuth | LoginUser | CreateUser | ReadUser | UpdateUser | DeleteUser;
