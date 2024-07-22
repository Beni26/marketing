import UseUser from "./useUser";

const UseAuthorize = () => {
  const { isLoading, data } = UseUser();

  let isAuthenticated = false;
  if (data) isAuthenticated = true;

  return {isLoading, data, isAuthenticated };
};

export default UseAuthorize;
