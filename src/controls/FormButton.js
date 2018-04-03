import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

class FormButton extends Component {
  control = (() => {
    return {
      render: () => {
        const {color, id, label, onClick: handleClick} = this.props;
        return (
          <Button
            color={color}
            id={id}
            onClick={handleClick}
          >
            {label}
          </Button>
        );
      },
    };
  })();

  render() {
    return this.control.render();
  }
}

FormButton.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormButton;
