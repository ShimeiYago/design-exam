import { shallow, ShallowWrapper } from 'enzyme';
import { RadioGroup, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  options: [
    { label: 'schooling', value: '1' },
    { label: 'employment', value: '2' },
  ],
  groupLabel: 'classification',
  selectedValue: '1',
  onChange: jest.fn(),
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<RadioGroup {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
