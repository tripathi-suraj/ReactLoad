import React, { Component } from 'react';
import withHoc from './withHoc';

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button className="button" onClick={incrementCount}>
          {this.props.name} Click {count}
        </button>
      </div>
    );
  }
}

export default withHoc(ClickCounter);
