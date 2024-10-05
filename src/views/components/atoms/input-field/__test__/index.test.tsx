import { shallow, ShallowWrapper } from 'enzyme';
import { InputField, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  value: 'text',
  onChange: jest.fn(),
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<InputField {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
