import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, InputStyled, LabelStyled } from './Styled/InputStyled';

const Input = (props) => {
  const { name, type, placeholder, size, input, autoFocus, label, autocomplete, className } = props;

  return (
    <InputContainer>
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
        size={size}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        autoComplete={autocomplete}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        className={className}
      />
      {label && <LabelStyled htmlFor={label}>{label}</LabelStyled>}
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape(),
  autoFocus: PropTypes.bool,
  label: PropTypes.string,
  autocomplete: PropTypes.string,
  className: PropTypes.string,
  classNameSpan: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  placeholder: '',
  size: '20',
  meta: {},
  autoFocus: false,
  label: '',
  autocomplete: 'on',
  className: '',
};

export default Input;
