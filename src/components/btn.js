import PropTypes from 'prop-types';
import React from 'react';

class Btn extends React.PureComponent {
  render() {
    const { btnName } = this.props;
    return (
      <div className="btn-div">
        <button type="button" className="btn">{btnName}</button>
      </div>
    );
  }
}

Btn.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Btn;
