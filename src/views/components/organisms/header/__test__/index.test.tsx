import { shallow, ShallowWrapper } from 'enzyme';
import { Header, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  title: 'title',
  iconSrc: 'src',
  emailAddress: 'example@example.com',
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
