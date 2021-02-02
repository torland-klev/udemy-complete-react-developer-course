import React from 'react';

class Temp extends React.Component {
  constructor() {
    super();
    this.state = {
      isSingleSumPost: false
    };
  }

handleInputChange = () => {
  this.setState(prevState => ({
    isSingleSumPost: !prevState.isSingleSumPost
  }));
}

  render() {
    const content = (this.state.isSingleSumPost) ? <div>Active</div> : <div>Not Active</div>
    return (
      <div>
        <input
          name="isActive"
          type="checkbox"
          checked={this.state.isSingleSumPost}
          onChange={this.handleInputChange} />
        {content}
      </div>
    )
  }
}

export default Temp;