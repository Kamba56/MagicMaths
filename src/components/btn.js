import PropTypes from 'prop-types';
import React from 'react';

class Btn extends React.PureComponent {
  render() {
    const { btnName, event } = this.props;
    return (
      <div className="btn-div">
        <button type="button" className="btn" onClick={event}>{btnName}</button>
      </div>
    );
  }
}

Btn.propTypes = {
  btnName: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default Btn;
