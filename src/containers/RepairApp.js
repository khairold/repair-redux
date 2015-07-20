import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Repair from '../components/Repair';
import * as RepairActions from '../actions/RepairActions';

@connect(state => ({
  repair: state.repair
}))
export default class RepairApp extends Component {
  render() {
    const { repair, dispatch } = this.props;
    return (
      <Repair repair={repair}
               {...bindActionCreators(RepairActions, dispatch)} />
    );
  }
}
