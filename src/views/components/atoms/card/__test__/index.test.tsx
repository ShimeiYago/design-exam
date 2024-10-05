import { shallow, ShallowWrapper } from 'enzyme';
import { Card, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  children: 'text',
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
