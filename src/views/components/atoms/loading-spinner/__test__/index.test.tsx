import { shallow, ShallowWrapper } from 'enzyme';
import { LoadingSpinner } from '..';

let wrapper: ShallowWrapper;

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<LoadingSpinner />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
