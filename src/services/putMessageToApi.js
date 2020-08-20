import { toast } from 'react-toastify';
import { API } from '../config';
import fetchData from '../utils/fetchData';

async function putMessageToApi(payload) {
  try {
    const {
      URL,
      ENDPOINTS: { MESSAGES },
    } = API;
    console.log('putMessageToApi -> JSON.stringify(payload)', JSON.stringify(payload));
    return await fetchData(`${URL}/${MESSAGES}/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    toast.error('ошибка отправки сообщения');
    throw new Error(e.message);
  }
}

export default putMessageToApi;
