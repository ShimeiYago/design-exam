import { shallow, ShallowWrapper } from 'enzyme';
import { App } from '..';
import { useAppSelector } from 'store';

jest.mock('store', () => ({
  useAppSelector: jest.fn(),
}));

let wrapper: ShallowWrapper;

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
    jest.clearAllMocks();
    (useAppSelector as jest.Mock).mockReturnValue(true);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('before login', () => {
    (useAppSelector as jest.Mock).mockReturnValue(false);
    expect(wrapper).toMatchSnapshot();
  });
});
