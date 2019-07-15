import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

const defaultProps = {
  children: 'Button',
  color: 'primary'
};

const Button = ({ color, children, className, ...attributes }) => {
  const classes = classNames('btn', `btn--${color}`);
  return (
    <a className={classes} {...attributes}>
      {children}
    </a>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
