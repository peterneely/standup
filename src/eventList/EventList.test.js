import React from 'react';
import {shallow} from 'enzyme';
import EventList from './EventList';
import AddEvent from '../events/AddEvent';

const defaultProps = {};
const createWrapper = (props = {}) => shallow(<EventList {...defaultProps} {...props} />);
// const findControls = wrapper => (Control, id) => wrapper.find(Control).findWhere(comp => {
//   // console.log(comp.props(), comp.prop('id'));
//   return comp.prop('id') === id;
// });

describe('EventList', () => {
  it('Should exist', () => {
    expect(createWrapper().length).toEqual(1);
  });

  // it('Should have the correct props', () => {
  //   const wrapper = createWrapper();
  //   const {id} = wrapper.instance().props;
  //   expect(id).toEqual(defaultProps.id);
  // });

  it('Should have the correct controls', () => {
    const wrapper = createWrapper();
    expect(wrapper.find(AddEvent).length).toEqual(1);
  });
});
