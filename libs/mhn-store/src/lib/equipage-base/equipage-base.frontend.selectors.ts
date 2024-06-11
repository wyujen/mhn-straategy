import { EquipageBaseEntity } from './equipage-base.entity';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createSelector } from 'mycena-store';
import { map, Observable } from 'rxjs';
import { Cqrs } from '../frontend';
import { FeatureKey, EquipageBaseState } from './equipage-base.reducer';
import { IEquipageBase } from './equipage-base.model';
import { EquipageBaseRelation } from '../relation.interface';

//Pure State
export const selectEquipageBaseState: Observable<EquipageBaseState> =
  Cqrs.createFeatureSelector<EquipageBaseState>(FeatureKey);

export const selectEquipageBaseMapList: Observable<Record<string, IEquipageBase>> =
  createSelector([selectEquipageBaseState], (state: EquipageBaseState) => state.entities);
  
export const selectEquipageBaseEntities: Observable<IEquipageBase[]> = createSelector(
  [selectEquipageBaseMapList],
  (state: Record<string, IEquipageBase>) => Object.values(state)
);

//Relation Entity
export const selectRelationEquipageBaseMapList: Observable<
  Record<string, EquipageBaseRelation>
> = Cqrs.createRelationSelector(FeatureKey).pipe(
  map((state: any) => state['entities'])
);

export const selectRelationEquipageBases: Observable<EquipageBaseRelation[]> = createSelector(
  [selectRelationEquipageBaseMapList],
  (equipageBaseEntities: Record<string, EquipageBaseRelation>) => Object.values(equipageBaseEntities)
);
