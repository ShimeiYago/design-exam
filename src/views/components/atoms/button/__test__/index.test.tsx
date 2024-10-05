import { shallow, ShallowWrapper } from 'enzyme';
import { Button, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  children: 'login',
  color: 'basic',
  onClick: jest.fn(),
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('fullWidth case', () => {
    wrapper.setProps({ fullWidth: true });
    expect(wrapper).toMatchSnapshot();
  });
});
