import { AxiosError, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { getAxiosInstance } from 'api/utils/get-axios-instance';
import { EmployEducationTransitionValue } from 'store/resas-data/model/employ-education-transition-value';
import { handleAxiosError } from 'api/utils/handle-axios-error';
import { RESAS_BASE_URL } from 'api/constants';
import { mockGetEmployEducationTransitionResponse } from './mock-data';
import { GetEmployEducationTransitionParams } from './parameters';

export async function getEmployEducationTransition(
  params: GetEmployEducationTransitionParams,
): Promise<GetEmployEducationTransitionResponse> {
  const headers: AxiosRequestHeaders = {
    'X-API-KEY': process.env.REACT_APP_RESAS_APIKEY ?? '',
  };
  const axiosInstance = getAxiosInstance({ headers }, mockGetEmployEducationTransitionResponse);

  const queryParams = new URLSearchParams({
    prefecture_cd: params.prefectureCd.toString(),
    classification: params.classification,
    matter: params.matter,
    displayType: params.displayType,
    gender: params.gender,
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
