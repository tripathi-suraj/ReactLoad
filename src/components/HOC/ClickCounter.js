import React, { Component } from 'react';
import UpdatedComponent from './withHoc';

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button className="button" onClick={incrementCount}>
          Click {count}
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
