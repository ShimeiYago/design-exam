import { shallow, ShallowWrapper } from 'enzyme';
import { LabeledInputField, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  value: 'text',
  onChange: jest.fn(),
  label: 'label',
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<LabeledInputField {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
