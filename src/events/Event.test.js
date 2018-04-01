import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import Event from './Event';
import initialState from '../store/initialState';

const createWrapper = (state = {}) => {
  const store = configureStore()({...initialState, ...state});
  return shallow(<Event />, {context: {store}}).dive();
};

describe('Event', () => {
  it('Should exist', () => {
    expect(createWrapper().length).toEqual(1);
  });

  it('Should have the correct props', () => {
    const wrapper = createWrapper();
    const {date, notes, title} = wrapper.instance().props;
    expect(title).toBeDefined();
    expect(date).toBeDefined();
    expect(notes).toBeDefined();
  });
});
