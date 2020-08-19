import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessagesContainerStyled from './Styled/MessagesContainerStyled';
import Message from './Message';

const Messages = (props) => {
  const { messages } = props;
  console.log('Messages -> messages', messages);
  return (
    <MessagesContainerStyled>
      {messages.map((message) => {
        return <Message name={message.name} message={message.message} />;
      })}
    </MessagesContainerStyled>
  );
};

Messages.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  return {
    messages: state.userMessageReducer.data,
  };
};
export default connect(mapStateToProps, null)(Messages);
