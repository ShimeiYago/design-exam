import { shallow, ShallowWrapper } from 'enzyme';
import { Image, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  src: 'image-data',
  alt: 'alt-text',
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Image {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
