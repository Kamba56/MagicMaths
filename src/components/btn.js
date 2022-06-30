import PropTypes from 'prop-types';
import React from 'react';

class Btn extends React.component {
  render() {
    return (
      <div className="btn-div">
        <button type="button" className="btn">{this.props.btnName}</button>
      </div>
    );
  }
}

Btn.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Btn;
