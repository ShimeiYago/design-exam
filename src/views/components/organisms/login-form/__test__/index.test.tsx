import { shallow, ShallowWrapper } from 'enzyme';
import { LoginForm, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  onLogin: jest.fn(),
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<LoginForm {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
