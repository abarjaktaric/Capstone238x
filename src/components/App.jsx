import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchData } from '../actions/fetchData';
import MainLayout from './MainLayout';

class App extends Component {

  componentWillMount() {
    //* rubric81 - Data accessed via Azure API and added to store*//
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      <>
        <HashRouter>
          <MainLayout />
        </HashRouter>
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data.items
});

export default connect(mapStateToProps)(App);