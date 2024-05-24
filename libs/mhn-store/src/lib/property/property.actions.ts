import { Action } from 'mycena-store';
import { IProperty } from './property.model';

export const CommonActionMap = {
  TestProperty: '[Property] Testing Property',
};

export const BackendActionMap = {
  ...CommonActionMap,
  CreateProperty: '[Property] Create Property',
  ReadProperty: '[Property] Read Property',
  UpdateProperty: '[Property] Update Property',
  DeleteProperty: '[Property] Delete Property',
};

export const FrontendActionMap = {
  ...CommonActionMap,
  CreateProperty: '[Property] Create Property',
  ReadProperty: '[Property] Read Property',
  UpdateProperty: '[Property] Update Property',
  DeleteProperty: '[Property] Delete Property',
  LoginProperty: '[Property] Login Property',
};

export const ActionMap = {
  ...BackendActionMap,
  ...FrontendActionMap,
};

export class CreateProperty extends Action {
  readonly type: string = ActionMap.CreateProperty;
  constructor(public payload: IProperty) {
    super();
  }
}

export class ReadProperty extends Action {
  readonly type: string = ActionMap.ReadProperty;
  constructor() {
    super();
  }
}

export class UpdateProperty extends Action {
  readonly type: string = ActionMap.UpdateProperty;
  constructor(public payload: IProperty[]) {
    super();
  }
}

export class DeleteProperty extends Action {
  readonly type: string = ActionMap.DeleteProperty;
  constructor(public payload: string[]) {
    super();
  }
}

// export type ActionUnion = LoginAuth | LoginProperty | CreateProperty | ReadProperty | UpdateProperty | DeleteProperty;
