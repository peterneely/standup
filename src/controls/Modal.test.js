import React from 'react';
import {shallow} from 'enzyme';
import Modal from './Modal';
import Dialog from 'material-ui/Dialog';

const defaultProps = {id: '', onClose: () => {}, open: false};
const createWrapper = (props = {}) => shallow(<Modal {...defaultProps} {...props} />);

describe('Modal', () => {
  it('Should exist', () => {
    expect(createWrapper().length).toEqual(1);
  });

  it('Should have the correct props', () => {
    const wrapper = createWrapper();
    const {id, onClose, open} = wrapper.instance().props;
    expect(id).toEqual(defaultProps.id);
    expect(onClose).toEqual(defaultProps.onClose);
    expect(open).toEqual(defaultProps.open);
    const dialogProps = wrapper.find(Dialog).props();
    expect(dialogProps.open).toBeFalsy();
  });
});
