import React, { Component } from 'react';
import UpdatedComponent from './withHoc';

class ClickCounter extends Component {
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
        <button className="button" onClick={this.incrementCount}>
          {this.props.name}: Click {count}
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
