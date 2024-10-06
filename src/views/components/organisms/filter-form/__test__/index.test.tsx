import { shallow, ShallowWrapper } from 'enzyme';
import { FilterForm, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  onChange: jest.fn(),
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<FilterForm {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
