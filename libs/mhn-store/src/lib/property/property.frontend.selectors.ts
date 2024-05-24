import { PropertyEntity } from './property.entity';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createSelector } from 'mycena-store';
import { map, Observable } from 'rxjs';
import { Cqrs } from '../frontend';
import { FeatureKey, PropertyState } from './property.reducer';
import { IProperty } from './property.model';
import { PropertyRelation } from '../relation.interface';

//Pure State
export const selectPropertyState: Observable<PropertyState> =
  Cqrs.createFeatureSelector<PropertyState>(FeatureKey);

export const selectPropertyMapList: Observable<Record<string, IProperty>> =
  createSelector([selectPropertyState], (state: PropertyState) => state.entities);
  
export const selectPropertyEntities: Observable<IProperty[]> = createSelector(
  [selectPropertyMapList],
  (state: Record<string, IProperty>) => Object.values(state)
);

//Relation Entity
export const selectRelationPropertyMapList: Observable<
  Record<string, PropertyRelation>
> = Cqrs.createRelationSelector(FeatureKey).pipe(
  map((state: any) => state['entities'])
);

export const selectRelationPropertys: Observable<PropertyRelation[]> = createSelector(
  [selectRelationPropertyMapList],
  (propertyEntities: Record<string, PropertyRelation>) => Object.values(propertyEntities)
);
