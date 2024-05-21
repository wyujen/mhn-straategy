import { Action } from 'mycena-store';
import { IArea } from './area.model';

export const CommonActionMap = {
  TestArea: '[Area] Testing Area',
};

export const BackendActionMap = {
  ...CommonActionMap,
  CreateArea: '[Area] Create Area',
  ReadArea: '[Area] Read Area',
  UpdateArea: '[Area] Update Area',
  DeleteArea: '[Area] Delete Area',
};

export const FrontendActionMap = {
  ...CommonActionMap,
  CreateArea: '[Area] Create Area',
  ReadArea: '[Area] Read Area',
  UpdateArea: '[Area] Update Area',
  DeleteArea: '[Area] Delete Area',
  LoginArea: '[Area] Login Area',
};

export const ActionMap = {
  ...BackendActionMap,
  ...FrontendActionMap,
};

export class CreateArea extends Action {
  readonly type: string = ActionMap.CreateArea;
  constructor(public payload: IArea) {
    super();
  }
}

export class ReadArea extends Action {
  readonly type: string = ActionMap.ReadArea;
  constructor() {
    super();
  }
}

export class UpdateArea extends Action {
  readonly type: string = ActionMap.UpdateArea;
  constructor(public payload: IArea[]) {
    super();
  }
}

export class DeleteArea extends Action {
  readonly type: string = ActionMap.DeleteArea;
  constructor(public payload: string[]) {
    super();
  }
}

// export type ActionUnion = LoginAuth | LoginArea | CreateArea | ReadArea | UpdateArea | DeleteArea;
