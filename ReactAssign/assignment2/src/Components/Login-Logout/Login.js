import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
// useEffect(() => {
//     setIsLoggedInButton(!isLoggenInButton); 
//   }, [setIsLoggedInButton]);
  const navigate = useNavigate();

  const goToLoginComponent = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className='login-form'>
      <form className='login' onSubmit={goToLoginComponent}>
        <label>Name</label>
        <input name="name" id="name" />

        <label>Password</label>
        <input name="password" id="password" />

        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
