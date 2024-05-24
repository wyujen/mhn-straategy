import { Action } from 'mycena-store';
import { IDragonProperty } from './dragon-property.model';

export const CommonActionMap = {
  TestDragonProperty: '[DragonProperty] Testing DragonProperty',
};

export const BackendActionMap = {
  ...CommonActionMap,
  CreateDragonProperty: '[DragonProperty] Create DragonProperty',
  ReadDragonProperty: '[DragonProperty] Read DragonProperty',
  UpdateDragonProperty: '[DragonProperty] Update DragonProperty',
  DeleteDragonProperty: '[DragonProperty] Delete DragonProperty',
};

export const FrontendActionMap = {
  ...CommonActionMap,
  CreateDragonProperty: '[DragonProperty] Create DragonProperty',
  ReadDragonProperty: '[DragonProperty] Read DragonProperty',
  UpdateDragonProperty: '[DragonProperty] Update DragonProperty',
  DeleteDragonProperty: '[DragonProperty] Delete DragonProperty',
  LoginDragonProperty: '[DragonProperty] Login DragonProperty',
};

export const ActionMap = {
  ...BackendActionMap,
  ...FrontendActionMap,
};

export class CreateDragonProperty extends Action {
  readonly type: string = ActionMap.CreateDragonProperty;
  constructor(public payload: IDragonProperty) {
    super();
  }
}

export class ReadDragonProperty extends Action {
  readonly type: string = ActionMap.ReadDragonProperty;
  constructor() {
    super();
  }
}

export class UpdateDragonProperty extends Action {
  readonly type: string = ActionMap.UpdateDragonProperty;
  constructor(public payload: IDragonProperty[]) {
    super();
  }
}

export class DeleteDragonProperty extends Action {
  readonly type: string = ActionMap.DeleteDragonProperty;
  constructor(public payload: string[]) {
    super();
  }
}

// export type ActionUnion = LoginAuth | LoginDragonProperty | CreateDragonProperty | ReadDragonProperty | UpdateDragonProperty | DeleteDragonProperty;
