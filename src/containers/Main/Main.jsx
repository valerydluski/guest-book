import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
  saveUserMessageToStore,
  saveUserMessageToAPI,
  loadDataFromApi,
} from '../../redux/UserMessage/actions';
import ReduxMessageForm from '../../components/MessageForm/MessageForm';
import Messages from '../../components/Messages/Messages';

function Main(props) {
  const { saveToStore, saveToAPI, loadData } = props;
  loadData();
  const onSubmit = (formData) => {
    saveToStore(formData);
    saveToAPI(formData);
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
  loadData: loadDataFromApi,
};

export default connect(null, mapDispatchToProps)(Main);
