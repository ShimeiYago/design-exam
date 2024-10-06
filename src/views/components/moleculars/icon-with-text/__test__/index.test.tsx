import { shallow, ShallowWrapper } from 'enzyme';
import { IconWithText, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  text: 'text',
  iconSrc: 'src',
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<IconWithText {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
