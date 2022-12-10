const config = {
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
    Authorization: `Bearer ${localStorage.token}`,
  },
};

const authHeader = {
  config,
};
export default authHeader;
