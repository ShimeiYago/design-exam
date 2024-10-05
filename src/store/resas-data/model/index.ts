import { EmployEducationTransitionValue } from './employ-education-transition-value';

export interface resasDataState {
  employEducationTransition: EmployEducationTransitionValue[];
  loading: boolean;
  failed: boolean;
}

export const initialState: resasDataState = {
  employEducationTransition: [],
  loading: true,
  failed: false,
};
