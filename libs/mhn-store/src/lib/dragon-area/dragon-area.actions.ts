import { Action } from 'mycena-store';
import { IDragonArea } from './dragon-area.model';

export const CommonActionMap = {
  TestDragonArea: '[DragonArea] Testing DragonArea',
};

export const BackendActionMap = {
  ...CommonActionMap,
  CreateDragonArea: '[DragonArea] Create DragonArea',
  ReadDragonArea: '[DragonArea] Read DragonArea',
  UpdateDragonArea: '[DragonArea] Update DragonArea',
  DeleteDragonArea: '[DragonArea] Delete DragonArea',
};

export const FrontendActionMap = {
  ...CommonActionMap,
  CreateDragonArea: '[DragonArea] Create DragonArea',
  ReadDragonArea: '[DragonArea] Read DragonArea',
  UpdateDragonArea: '[DragonArea] Update DragonArea',
  DeleteDragonArea: '[DragonArea] Delete DragonArea',
  LoginDragonArea: '[DragonArea] Login DragonArea',
};

export const ActionMap = {
  ...BackendActionMap,
  ...FrontendActionMap,
};

export class CreateDragonArea extends Action {
  readonly type: string = ActionMap.CreateDragonArea;
  constructor(public payload: IDragonArea) {
    super();
  }
}

export class ReadDragonArea extends Action {
  readonly type: string = ActionMap.ReadDragonArea;
  constructor() {
    super();
  }
}

export class UpdateDragonArea extends Action {
  readonly type: string = ActionMap.UpdateDragonArea;
  constructor(public payload: IDragonArea[]) {
    super();
  }
}

export class DeleteDragonArea extends Action {
  readonly type: string = ActionMap.DeleteDragonArea;
  constructor(public payload: string[]) {
    super();
  }
}

// export type ActionUnion = LoginAuth | LoginDragonArea | CreateDragonArea | ReadDragonArea | UpdateDragonArea | DeleteDragonArea;
