import './App.css';
import Counter from './Components/Counter/Counter';
import { Routes, Route, Link } from 'react-router-dom';
import MessagePassing from './Components/MessagePassing/MessagePassing';
import Todo from './Components/Todo/Todo'
import Login from './Components/Login-Logout/Login';
import LoginComponent from './Components/Login-Logout/LoginComponent';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function App() {

  const [isLoggenInButton, setIsLoggedInButton] = useState(true)
  const navigate = useNavigate();


  return (
    <>
    

    <nav>
      <div className='upper-navbar'>
      <header>React Assignment</header>
      </div>
      <div className='lower-navbar'>
        <Link to = "/counter">Counter</Link>
      <Link to = "/message" > Message passing </Link>
      <Link to = "/todo" >Todo</Link>
      <Link to = "/login" >
      <button
  onClick={() => {
    if (isLoggenInButton) {
      navigate("/login");
    } else {
      setIsLoggedInButton(true);
      navigate("/login");
    }
  }}
>
  {isLoggenInButton ? "Login" : "Logout"}
</button>
      </Link>
      </div>
    </nav>

    <Routes>
  <Route path='/counter' element={<Counter />} />
  <Route path='/message' element={<MessagePassing />} />
  <Route path='/todo' element={<Todo />} />
  <Route path='/login' element={<Login/>} />
  <Route path='/dashboard' element={<LoginComponent isLoggenInButton = {isLoggenInButton} setIsLoggedInButton = {setIsLoggedInButton} />} />

</Routes>

    </>
  );
}

export default App;
