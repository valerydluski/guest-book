import React from 'react';
import PropTypes from 'prop-types';
import { MessageContainerStyled, TextFieldStyled, NameFieldStyled } from './Styled/MessageStyled';

const Message = (props) => {
  const { name, message } = props;

  return (
    <MessageContainerStyled>
      <NameFieldStyled>{name}</NameFieldStyled>
      <TextFieldStyled>{message}</TextFieldStyled>
    </MessageContainerStyled>
  );
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
