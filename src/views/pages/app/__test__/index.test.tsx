import { shallow, ShallowWrapper } from 'enzyme';
import { App } from '..';
import { useAppDispatch, useAppSelector } from 'store';

jest.mock('store', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

jest.mock('store/resas-data/slice', () => ({
  fetchResasData: jest.fn(),
}));

let wrapper: ShallowWrapper;

describe('Shallow Snapshot Tests', () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    wrapper = shallow(<App />);
    jest.clearAllMocks();
    (useAppSelector as jest.Mock).mockReturnValue(true);
    mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('before login', () => {
    (useAppSelector as jest.Mock).mockReturnValue(false);
    expect(wrapper).toMatchSnapshot();
  });
});
