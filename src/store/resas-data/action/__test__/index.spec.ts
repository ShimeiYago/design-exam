import { fetchResasData } from '..';
import * as GetEmployEducationTransitionModule from 'api/resas/get-employ-education-transition';
import { RootState } from 'store';
import { mockGetEmployEducationTransitionResponse } from 'api/resas/get-employ-education-transition/mock-data';
import {
  GetEmployEducationTransitionParams,
  ResasClassification,
  ResasDisplayType,
  ResasGender,
  ResasMatter,
} from 'api/resas/get-employ-education-transition/parameters';

const dispatch = jest.fn();
let getEmployEducationTransitionSpy: jest.SpyInstance;

const testParams: GetEmployEducationTransitionParams = {
  prefectureCd: 28,
  classification: ResasClassification.Schooling,
  matter: ResasMatter.Local,
  displayType: ResasDisplayType.AllSchooling,
  gender: ResasGender.All,
};

const testState: Pick<RootState, 'resasData'> = {
  resasData: {
    employEducationTransition: [],
    loading: false,
    failed: false,
  },
};
const getState = () => testState;

describe('fetchResasData', () => {
  beforeEach(async () => {
    jest.resetAllMocks();
    getEmployEducationTransitionSpy = jest.spyOn(
      GetEmployEducationTransitionModule,
      'getEmployEducationTransition',
    );
  });

  it('call setLoading at first', async () => {
    getEmployEducationTransitionSpy.mockResolvedValue(mockGetEmployEducationTransitionResponse);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const appThunk = fetchResasData(testParams) as any;
    await appThunk(dispatch, getState, {});

    expect(dispatch.mock.calls[0][0].type).toBe('resasData/setLoading');
  });

  it('call setEmployEducationTransition if API successed', async () => {
    getEmployEducationTransitionSpy.mockResolvedValue(mockGetEmployEducationTransitionResponse);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const appThunk = fetchResasData(testParams) as any;
    await appThunk(dispatch, getState, {});

    expect(dispatch.mock.calls[2][0].type).toBe('resasData/setEmployEducationTransition');
  });

  it('call setFailed if API failed', async () => {
    getEmployEducationTransitionSpy.mockRejectedValue(new Error());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const appThunk = fetchResasData(testParams) as any;
    await appThunk(dispatch, getState, {});

    expect(dispatch.mock.calls[3][0].type).toBe('resasData/setFailed');
  });
});
