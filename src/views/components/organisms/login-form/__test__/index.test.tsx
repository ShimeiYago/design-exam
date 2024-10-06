import { shallow, ShallowWrapper } from 'enzyme';
import { LoginForm, Props } from '..';
import { useAppDispatch, useAppSelector } from 'store';

jest.mock('store', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

jest.mock('store/login/slice', () => ({
  fetchResasData: jest.fn(),
}));

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  onLogin: jest.fn(),
};

describe('Shallow Snapshot Tests', () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    wrapper = shallow(<LoginForm {...props} />);
    jest.clearAllMocks();
    (useAppSelector as jest.Mock).mockReturnValue('example@example.com');
    mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
