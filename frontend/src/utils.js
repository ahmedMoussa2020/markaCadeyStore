export const getError = (error) => {
  return error.response && error.response.data.v
    ? error.response.data.message
    : error.message;
};