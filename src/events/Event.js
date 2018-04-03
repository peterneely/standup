import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormText from '../controls/FormText';
import FormSelect from '../controls/FormSelect';
class Event extends Component {
  render() {
    return (
      <div>
        <FormText
          id="js-event-title"
        />
        <FormSelect
          id="js-event-id"
        />
      </div>
    );
  }
}

Event.propTypes = {
  date: PropTypes.string,
  notes: PropTypes.string,
  title: PropTypes.string,
};

function mapStateToProps(state) {
  const {events: {event: {date, id, notes, tags, title}}} = state;
  return {date, id, notes, tags, title};
}

export default connect(mapStateToProps)(Event);
