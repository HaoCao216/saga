import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

const HTTPService = {
  sendRequest: (method, url, headerParams, body, { timeout = 60000 } = {}, responseType = 'json') => {
    const headers = headerParams || {};
    const request = {
      url, method, timeout, headers, responseType,
    };
    if (!method.match(/get|head|delete/)) {
      request.data = body || {};
    }
    if (method === 'delete') {
      request.params = body;
    }
    return new Promise((resolve) => {
      axios.request(request).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          resolve(res);
        } else {
          resolve({ isError: true, ...res.data });
        }
      }).catch(err => resolve({ isError: true, err }));
    });
  },

  sendRequestWithToken: (method, url, headerParams, body, { timeout = 60000 } = {}, responseType = 'json') => {
    const headers = headerParams || {};
    const token = JSON.parse(localStorage.token || '{}');
    headers.authorization = token;
    return HTTPService.sendRequest(method, url, headers, body, { timeout }, responseType);
  },
};

export default HTTPService;
