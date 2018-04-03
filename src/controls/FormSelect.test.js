import React from 'react';
import {shallow} from 'enzyme';
import FormSelect from './FormSelect';

const createWrapper = (props = {}) => shallow(<FormSelect {...props} />);

describe('FormSelect', () => {
  it('Should exist', () => {
    expect(createWrapper().length).toEqual(1);
  });

  it('Should have the correct props', () => {
    const props = {id: '', value: ''};
    const wrapper = createWrapper(props);
    const {id, value} = wrapper.instance().props;
    expect(id).toEqual(props.id);
    expect(value).toEqual(props.value);
  });
});
