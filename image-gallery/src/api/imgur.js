import qs from 'qs';

const CLIENT_ID = '7a8ff09bcbd904e';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const params = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(params)}`;
  },
}