import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddEvent from '../events/AddEvent';

class FormText extends Component {
  control = (() => {
    return {
      render: () => {
        return (
          <div>
            <AddEvent />
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
