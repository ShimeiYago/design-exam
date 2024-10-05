import { resasDataReducer, setEmployEducationTransition, setFailed, setLoading } from '..';
import { resasDataState } from '../../model';

describe('resasData reducer', () => {
  const initialState: resasDataState = {
    employEducationTransition: [],
    loading: true,
    failed: false,
  };

  it('should handle initial state', () => {
    expect(resasDataReducer(undefined, { type: 'unknown' })).toEqual({
      employEducationTransition: [],
      loading: true,
      failed: false,
    });
  });

  it('should handle setEmployEducationTransition action', () => {
    const actual = resasDataReducer(
      initialState,
      setEmployEducationTransition([{ year: 2000, value: 17 }]),
    );
    expect(actual.employEducationTransition).toEqual([{ year: 2000, value: 17 }]);
  });

  it('should handle setLoading action', () => {
    const actual = resasDataReducer(initialState, setLoading(false));
    expect(actual.loading).toBeFalsy();
  });

  it('should handle setFailed action', () => {
    const actual = resasDataReducer(initialState, setFailed(true));
    expect(actual.failed).toBeTruthy();
  });
});
