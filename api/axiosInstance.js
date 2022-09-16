import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking',
});

export const get = async (url, options = {}) => {
  const response = await instance.get(url, options);
  return response;
};

export const postt = async (url, data = {}, options = {}) => {
  const response = await instance.post(url, data, options);
  return response;
};

export const remove = async (url, options = {}) => {
  const response = await instance.delete(url, options);
  return response;
};

export const put = async (url, data = {}, options = {}) => {
  const response = await instance.post(url, data, options);
  return response;
};

export default instance;

// import axios from 'axios';

// const instance = axios.create({
//   baseUrl: 'https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking',
// });

// export const postt = async (url, data = {}, options = {}) => {
//   const response = await instance.post(url, data, options);
//   return response;
// };

// export const gett = async (url, options = {}) => {
//   const response = await instance.get(url, options);
//   return response;
// };

// export default instance;

//https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking
