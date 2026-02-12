import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function LoginComponent({isLoggenInButton, setIsLoggedInButton}) {
//   const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedInButton(false);   
    // navigate('/');               
  }, [setIsLoggedInButton]);

  return (
    <div>
      You have logged in
    </div>
  );
}

export default LoginComponent;
