import { selectEmployEducationTransition, selectLoading, selectFailed } from '..';
import { resasDataState } from '../../model';

describe('counter selector', () => {
  const resasDataState: resasDataState = {
    employEducationTransition: [{ year: 2000, value: 17 }],
    loading: true,
    failed: true,
  };
  const rootState = {
    resasData: resasDataState,
  };

  it('selectEmployEducations should return employEducations value', () => {
    expect(selectEmployEducationTransition(rootState)).toEqual([{ year: 2000, value: 17 }]);
  });

  it('selectLoading should return loading value', () => {
    expect(selectLoading(rootState)).toBeTruthy();
  });

  it('selectFailed should return failed value', () => {
    expect(selectFailed(rootState)).toBeTruthy();
  });
});
