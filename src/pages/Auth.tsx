import React from "react";
import AuthContainer from '../features/authentication/AuthContainer';

interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center sm:max-w-xm ">
      <AuthContainer />
    </div>
  );
};

export default Auth;
