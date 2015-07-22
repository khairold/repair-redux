import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    receive: PropTypes.func.isRequired,
    send: PropTypes.func.isRequired,
    retrieve: PropTypes.func.isRequired,
    ship: PropTypes.func.isRequired,
    repair: PropTypes.object.isRequired,
    load: PropTypes.func.isRequired,
    doSomethingAsync: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.doSomethingAsync();
    console.log('lala');
  }

  render() {
    const { receive, send, retrieve, ship, repair, load } = this.props;
    return (
      <p>
        Repair state: {repair}

        <p>
          Data: {repair.data}
        </p>

        <button onClick={receive}>receive</button>
        <button onClick={send}>send</button>
        <button onClick={retrieve}>retrieve</button>
        <button onClick={ship}>ship</button>
        <button onClick={load}>load</button>
      </p>

    );
  }
}
