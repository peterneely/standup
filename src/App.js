/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import Content from './layout/Content';
import Header from './layout/Header';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
