import { shallow, ShallowWrapper } from 'enzyme';
import { TextWrapper, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  children: 'text',
  size: 'medium',
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<TextWrapper {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('align center', () => {
    wrapper.setProps({ align: 'center' });
    expect(wrapper).toMatchSnapshot();
  });

  it('bold case', () => {
    wrapper.setProps({ bold: true });
    expect(wrapper).toMatchSnapshot();
  });
});
