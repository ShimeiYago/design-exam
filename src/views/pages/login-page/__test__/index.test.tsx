import { shallow, ShallowWrapper } from 'enzyme';
import { LoginPage } from '..';
import { useAppDispatch } from 'store';

jest.mock('store', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('store/login/slice', () => ({
  login: jest.fn(),
}));

let wrapper: ShallowWrapper;

describe('Shallow Snapshot Tests', () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
    jest.clearAllMocks();
    mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
