import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Event extends Component {
  render() {
    return (<div />);
  }
}

Event.propTypes = {
  date: PropTypes.string,
  notes: PropTypes.string,
  title: PropTypes.string,
};

function mapStateToProps(state) {
  const {events: {event: {date, notes, title}}} = state;
  return {date, notes, title};
}

export default connect(mapStateToProps)(Event);
