import { Action } from 'mycena-store';
import { IDragon_Area } from './dragon_area.model';

export const CommonActionMap = {
  TestDragon_Area: '[Dragon_Area] Testing Dragon_Area',
};

export const BackendActionMap = {
  ...CommonActionMap,
  CreateDragon_Area: '[Dragon_Area] Create Dragon_Area',
  ReadDragon_Area: '[Dragon_Area] Read Dragon_Area',
  UpdateDragon_Area: '[Dragon_Area] Update Dragon_Area',
  DeleteDragon_Area: '[Dragon_Area] Delete Dragon_Area',
};

export const FrontendActionMap = {
  ...CommonActionMap,
  CreateDragon_Area: '[Dragon_Area] Create Dragon_Area',
  ReadDragon_Area: '[Dragon_Area] Read Dragon_Area',
  UpdateDragon_Area: '[Dragon_Area] Update Dragon_Area',
  DeleteDragon_Area: '[Dragon_Area] Delete Dragon_Area',
  LoginDragon_Area: '[Dragon_Area] Login Dragon_Area',
};

export const ActionMap = {
  ...BackendActionMap,
  ...FrontendActionMap,
};

export class CreateDragon_Area extends Action {
  readonly type: string = ActionMap.CreateDragon_Area;
  constructor(public payload: IDragon_Area) {
    super();
  }
}

export class ReadDragon_Area extends Action {
  readonly type: string = ActionMap.ReadDragon_Area;
  constructor() {
    super();
  }
}

export class UpdateDragon_Area extends Action {
  readonly type: string = ActionMap.UpdateDragon_Area;
  constructor(public payload: IDragon_Area[]) {
    super();
  }
}

export class DeleteDragon_Area extends Action {
  readonly type: string = ActionMap.DeleteDragon_Area;
  constructor(public payload: string[]) {
    super();
  }
}

// export type ActionUnion = LoginAuth | LoginDragon_Area | CreateDragon_Area | ReadDragon_Area | UpdateDragon_Area | DeleteDragon_Area;
