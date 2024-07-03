import api from './api'; 

export const fetchUserSuccess = async () => {
  try {
    const response = await api.get('/success');
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchUserError = async () => {
  try {
    const response = await api.get('/error');
    return response;
  } catch (error) {
    throw error;
  }
};
