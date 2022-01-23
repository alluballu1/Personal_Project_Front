let token = null;

const setToken = (newToken) => {
    console.log(newToken)
    token = `Bearer ${newToken}`;
    console.log(token)
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { token, setToken };
