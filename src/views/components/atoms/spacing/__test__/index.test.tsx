import { shallow, ShallowWrapper } from 'enzyme';
import { Spacing, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  children: 'text',
  margin: '10px',
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Spacing {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
