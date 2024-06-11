import { Action } from 'mycena-store';
import { IEquipageBase } from './equipage-base.model';

export const CommonActionMap = {
  TestEquipageBase: '[EquipageBase] Testing EquipageBase',
};

export const BackendActionMap = {
  ...CommonActionMap,
  CreateEquipageBase: '[EquipageBase] Create EquipageBase',
  ReadEquipageBase: '[EquipageBase] Read EquipageBase',
  UpdateEquipageBase: '[EquipageBase] Update EquipageBase',
  DeleteEquipageBase: '[EquipageBase] Delete EquipageBase',
};

export const FrontendActionMap = {
  ...CommonActionMap,
  CreateEquipageBase: '[EquipageBase] Create EquipageBase',
  ReadEquipageBase: '[EquipageBase] Read EquipageBase',
  UpdateEquipageBase: '[EquipageBase] Update EquipageBase',
  DeleteEquipageBase: '[EquipageBase] Delete EquipageBase',
  LoginEquipageBase: '[EquipageBase] Login EquipageBase',
};

export const ActionMap = {
  ...BackendActionMap,
  ...FrontendActionMap,
};

export class CreateEquipageBase extends Action {
  readonly type: string = ActionMap.CreateEquipageBase;
  constructor(public payload: IEquipageBase) {
    super();
  }
}

export class ReadEquipageBase extends Action {
  readonly type: string = ActionMap.ReadEquipageBase;
  constructor() {
    super();
  }
}

export class UpdateEquipageBase extends Action {
  readonly type: string = ActionMap.UpdateEquipageBase;
  constructor(public payload: IEquipageBase[]) {
    super();
  }
}

export class DeleteEquipageBase extends Action {
  readonly type: string = ActionMap.DeleteEquipageBase;
  constructor(public payload: string[]) {
    super();
  }
}

// export type ActionUnion = LoginAuth | LoginEquipageBase | CreateEquipageBase | ReadEquipageBase | UpdateEquipageBase | DeleteEquipageBase;
