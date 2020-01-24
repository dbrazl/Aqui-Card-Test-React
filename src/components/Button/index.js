import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Wrapper, Label } from './styles';

export default function Button({ to, children }) {
  return (
    <Link to={to}>
      <Wrapper>
        <Label>{children}</Label>
      </Wrapper>
    </Link>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};

Button.defaultProps = {
  to: '/',
  children: Label,
};
