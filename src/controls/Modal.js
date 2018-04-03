import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

class Modal extends Component {
  control = (() => {
    return {
      render: () => {
        const {children = '', id, onClose: handleClose, open = false} = this.props;
        return (
          <Dialog
            id={id}
            onClose={handleClose}
            open={open}
          >
            {children}
          </Dialog>
        );
      },
    };
  })();

  render() {
    return this.control.render();
  }
}

Modal.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default Modal;
