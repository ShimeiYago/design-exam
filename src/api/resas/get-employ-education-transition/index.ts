import { AxiosError, AxiosResponse } from 'axios';
import { getAxiosInstance } from 'api/utils/get-axios-instance';
import { EmployEducationTransitionValue } from 'store/resas-data/model/employ-education-transition-value';
import { handleAxiosError } from 'api/utils/handle-axios-error';
import { RESAS_BASE_URL } from 'api/constants';
import { mockGetEmployEducationTransitionResponse } from './mock-data';
import { GetEmployEducationTransitionParams } from './parameters';

// process.env.REACT_APP_API_BASE_URL

export async function getEmployEducationTransition(
  params: GetEmployEducationTransitionParams,
): Promise<GetEmployEducationTransitionResponse> {
  const axiosInstance = getAxiosInstance({}, mockGetEmployEducationTransitionResponse);

  const queryParams = new URLSearchParams({
    prefecture_cd: params.prefectureCd.toString(),
    classification: params.classification.toString(),
    matter: params.displayType.toString(),
    displayType: params.displayType.toString(),
    gender: params.gender.toString(),
    displayMethod: '0',
  });
  const url = `${RESAS_BASE_URL}/employEducation/localjobAcademic/toTransition?${queryParams.toString()}`;

  try {
    const res: AxiosResponse<GetEmployEducationTransitionResponse> = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw handleAxiosError(axiosError);
  }
}

export type GetEmployEducationTransitionResponse = {
  result: {
    changes: [
      {
        label: string;
        prefCode: string;
        data: EmployEducationTransitionValue[];
      },
    ];
  };
};
