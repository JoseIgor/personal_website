import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {
  children: 'Button'
};

const Button = ({ children, ...attributes }) => {
  return (
    <>
      <button {...attributes}>{children}</button>
    </>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
