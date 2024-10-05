import { AppThunk } from 'store';
import { setEmployEducationTransition, setFailed, setLoading } from '../slice';
import { getEmployEducationTransition } from 'api/resas/get-employ-education-transition';
import { GetEmployEducationTransitionParams } from 'api/resas/get-employ-education-transition/parameters';

export const fetchResasData =
  (param: GetEmployEducationTransitionParams): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setFailed(false));

    try {
      const res = await getEmployEducationTransition(param);
      dispatch(setEmployEducationTransition(res.result.changes[0].data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setFailed(true));
    }
  };
