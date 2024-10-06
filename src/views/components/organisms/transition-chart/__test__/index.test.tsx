import { shallow, ShallowWrapper } from 'enzyme';
import { TransitionChart, Props } from '..';

let wrapper: ShallowWrapper<Props>;

const props: Props = {
  data: [
    { year: 2000, value: 17 },
    { year: 2001, value: 16.8 },
    { year: 2002, value: 16.8 },
    { year: 2003, value: 16.3 },
    { year: 2004, value: 15.8 },
    { year: 2005, value: 15.7 },
    { year: 2006, value: 15.6 },
    { year: 2007, value: 16.1 },
    { year: 2008, value: 15.5 },
    { year: 2009, value: 15.8 },
    { year: 2010, value: 15.8 },
    { year: 2011, value: 15.4 },
    { year: 2012, value: 15 },
    { year: 2013, value: 15.1 },
    { year: 2014, value: 14.9 },
    { year: 2015, value: 15.1 },
    { year: 2016, value: 15.2 },
    { year: 2017, value: 15.6 },
    { year: 2018, value: 15.5 },
    { year: 2019, value: 15.3 },
    { year: 2020, value: 15.2 },
    { year: 2021, value: 14.6 },
  ],
  loading: false,
  failed: false,
};

describe('Shallow Snapshot Tests', () => {
  beforeEach(() => {
    wrapper = shallow(<TransitionChart {...props} />);
  });

  it('basic', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('loading case', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('basic', () => {
    wrapper.setProps({ failed: true });
    expect(wrapper).toMatchSnapshot();
  });
});
