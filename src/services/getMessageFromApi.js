import { API } from '../config';
import fetchData from '../utils/fetchData';

async function getMessageFromApi(user) {
  try {
    const {
      URL,
      ENDPOINTS: { MESSAGES },
    } = API;

    return await fetchData(`${URL}/${MESSAGES}/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    return [];
  }
}

export default getMessageFromApi;
