import { Action } from 'mycena-store';
import { IDragon } from './dragon.model';

export const CommonActionMap = {
  TestDragon: '[Dragon] Testing Dragon',
};

export const BackendActionMap = {
  ...CommonActionMap,
  CreateDragon: '[Dragon] Create Dragon',
  ReadDragon: '[Dragon] Read Dragon',
  UpdateDragon: '[Dragon] Update Dragon',
  DeleteDragon: '[Dragon] Delete Dragon',
};

export const FrontendActionMap = {
  ...CommonActionMap,
  CreateDragon: '[Dragon] Create Dragon',
  ReadDragon: '[Dragon] Read Dragon',
  UpdateDragon: '[Dragon] Update Dragon',
  DeleteDragon: '[Dragon] Delete Dragon',
  LoginDragon: '[Dragon] Login Dragon',
};

export const ActionMap = {
  ...BackendActionMap,
  ...FrontendActionMap,
};

export class CreateDragon extends Action {
  readonly type: string = ActionMap.CreateDragon;
  constructor(public payload: IDragon) {
    super();
  }
}

export class ReadDragon extends Action {
  readonly type: string = ActionMap.ReadDragon;
  constructor() {
    super();
  }
}

export class UpdateDragon extends Action {
  readonly type: string = ActionMap.UpdateDragon;
  constructor(public payload: IDragon[]) {
    super();
  }
}

export class DeleteDragon extends Action {
  readonly type: string = ActionMap.DeleteDragon;
  constructor(public payload: string[]) {
    super();
  }
}

// export type ActionUnion = LoginAuth | LoginDragon | CreateDragon | ReadDragon | UpdateDragon | DeleteDragon;
