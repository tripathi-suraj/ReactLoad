import React, { Component } from 'react';
import UpdatedComponent from './withHoc';

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 className="button" onMouseOver={incrementCount}>
          {' '}
          Hover Over {count}
        </h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
