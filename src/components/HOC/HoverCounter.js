import React, { Component } from 'react';
import UpdatedComponent from './withHoc';

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 className="button" onMouseOver={this.incrementCount}>
          {this.props.name}: Hover Over {count}
        </h1>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
