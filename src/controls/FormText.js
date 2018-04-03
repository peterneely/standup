import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class FormText extends Component {
  control = (() => {
    return {
      render: () => {
        const {id, value} = this.props;
        return (
          <TextField
            id={id}
            value={value}
          />
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
  value: PropTypes.string,
};

export default FormText;
