import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { saveUserMessageToStore, saveUserMessageToAPI } from '../../redux/UserMessage/actions';
import ReduxMessageForm from '../../components/MessageForm/MessageForm';
import Messages from '../../components/Messages/Messages';

function Main(props) {
  const { saveToStore, saveToAPI } = props;
  const onSubmit = (formData) => {
    saveToStore(formData);
    saveToAPI();
    toast.success('отправленно');
  };

  return (
    <>
      <ReduxMessageForm onSubmit={onSubmit} />
      <Messages />
    </>
  );
}

const mapDispatchToProps = {
  saveToStore: saveUserMessageToStore,
  saveToAPI: saveUserMessageToAPI,
};

export default connect(null, mapDispatchToProps)(Main);
