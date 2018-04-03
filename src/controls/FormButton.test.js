import React from 'react';
import {shallow} from 'enzyme';
import FormButton from './FormButton';

const defaultProps = {id: '', label: '', onClick: () => {}};
const createWrapper = (props = {}) => shallow(<FormButton {...defaultProps} {...props} />);

describe('FormButton', () => {
  it('Should exist', () => {
    expect(createWrapper().length).toEqual(1);
  });

  it('Should have the correct props', () => {
    const wrapper = createWrapper();
    const {id, label, onClick} = wrapper.instance().props;
    expect(id).toEqual(defaultProps.id);
    expect(label).toEqual(defaultProps.label);
    expect(onClick).toEqual(defaultProps.onClick);
  });
});
