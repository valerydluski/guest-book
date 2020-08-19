import React from 'react';
import { reduxForm, Field } from 'redux-form';
import MessageFormStyled from './Styled/MessageFormStyled';
import Input from '../UI/Input/Input';
import RoundButton from '../UI/Button/RoundButton';

const MessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <MessageFormStyled onSubmit={handleSubmit}>
      <Field
        name="name"
        key="name"
        type="text"
        placeholder="Имя"
        component={Input}
        label="Имя"
        className="name"
      />
      <Field
        name="message"
        key="message"
        type="text"
        placeholder="Сообщение"
        component={Input}
        label="Сообщение"
        className="message"
      />
      <RoundButton type="submit" aria-label="Отправить">
        Отправить
      </RoundButton>
    </MessageFormStyled>
  );
};

const ReduxMessageForm = reduxForm({
  form: 'message',
})(MessageForm);

export default ReduxMessageForm;
