import { ApiError } from 'api/utils/handle-axios-error';
import { getEmployEducationTransition } from '..';
import {
  GetEmployEducationTransitionParams,
  ResasClassification,
  ResasDisplayType,
  ResasGender,
  ResasMatter,
} from '../parameters';

const testParams: GetEmployEducationTransitionParams = {
  prefectureCd: 28,
  classification: ResasClassification.Schooling,
  matter: ResasMatter.Local,
  displayType: ResasDisplayType.AllSchooling,
  gender: ResasGender.All,
};

describe('getEmployEducationTransition', () => {
  beforeEach(() => {
    process.env.REACT_APP_MOCK = '';
  });

  it('handle nomal response', async () => {
    process.env.REACT_APP_MOCK = 'normal';

    const response = await getEmployEducationTransition(testParams);
    expect(response.result.changes[0].prefCode).toBe('28');
  });

  it('handle error response', async () => {
    process.env.REACT_APP_MOCK = 'error';

    const expectedApiError: ApiError<unknown> = {
      status: 500,
      data: {},
      errorMsg: 'Mock Intentional API Error',
    };
    await expect(getEmployEducationTransition(testParams)).rejects.toEqual(expectedApiError);
  });
});
