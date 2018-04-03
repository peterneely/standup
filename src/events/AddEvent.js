import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormButton from '../controls/FormButton';
import Modal from '../controls/Modal';

class FormText extends Component {
  state = {dialogOpen: false};

  control = (() => {
    const handleRequestAdd = () => {
      this.setState({dialogOpen: true});
    };
    return {
      render: () => {
        return (
          <div>
            <FormButton color="primary" id="js-add-event-button" label="Add Event" onClick={handleRequestAdd} />
            <Modal
              id="js-add-event-dialog"
              onClose={() => {}}
              open={this.state.dialogOpen}
            >
              <p>{'Content here'}</p>
            </Modal>
          </div>
        );
      },
    };
  })();

  render() {
    return this.control.render();
  }
}

FormText.propTypes = {
  id: PropTypes.string,
};

export default FormText;
