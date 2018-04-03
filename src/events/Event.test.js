import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import Event from './Event';
import initialState from '../store/initialState';
import FormText from '../controls/FormText';
import FormSelect from '../controls/FormSelect';

const createWrapper = (state = {}) => {
  const store = configureStore()({...initialState, ...state});
  return shallow(<Event />, {context: {store}}).dive();
};

const findControls = wrapper => (Control, id) => wrapper.find(Control).findWhere(comp => comp.prop('id') === id);

describe('Event', () => {
  it('Should exist', () => {
    expect(createWrapper().length).toEqual(1);
  });

  it('Should have the correct props', () => {
    const wrapper = createWrapper();
    const {date, id, notes, tags, title} = wrapper.instance().props;
    expect(date).toBeDefined();
    expect(id).toBeDefined();
    expect(notes).toBeDefined();
    expect(tags).toBeDefined();
    expect(title).toBeDefined();
  });

  it('Should have the correct controls', () => {
    const wrapper = createWrapper();
    const findControlById = findControls(wrapper);
    expect(findControlById(FormText, 'js-event-title').length).toEqual(1);
    expect(findControlById(FormSelect, 'js-event-id').length).toEqual(1);
  });
});
