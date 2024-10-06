import { shallow, ShallowWrapper } from 'enzyme';
import { PageLayout, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  children: 'children',
  sidebar: 'sidebar',
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<PageLayout {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
