import React from 'react';
import {shallow} from 'enzyme';
import AddEvent from './AddEvent';
import FormButton from '../controls/FormButton';
import Modal from '../controls/Modal';

const defaultProps = {id: '', onClick: () => {}};
const createWrapper = (props = {}) => shallow(<AddEvent {...defaultProps} {...props} />);
const findControls = wrapper => (Control, id) => wrapper.find(Control).findWhere(comp => {
  // console.log(comp.props(), comp.prop('id'));
  return comp.prop('id') === id;
});

describe('AddEvent', () => {
  it('Should exist', () => {
    expect(createWrapper().length).toEqual(1);
  });

  it('Should have the correct props', () => {
    const wrapper = createWrapper();
    const {id} = wrapper.instance().props;
    expect(id).toEqual(defaultProps.id);
  });

  it('Should have the correct controls', () => {
    const wrapper = createWrapper();
    const findControlById = findControls(wrapper);
    expect(findControlById(FormButton, 'js-add-event-button').length).toEqual(1);
    expect(findControlById(Modal, 'js-add-event-dialog').length).toEqual(1);
  });
});

describe('Add event button', () => {
  it('Should open the dialog when clicked', () => {
    const wrapper = createWrapper();
    const findControlById = findControls(wrapper);
    const button = findControlById(FormButton, 'js-add-event-button');
    button.simulate('click');
    expect(wrapper.state().dialogOpen).toBeTruthy();
  });
});
