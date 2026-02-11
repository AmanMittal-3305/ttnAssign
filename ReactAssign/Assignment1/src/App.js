import logo from './logo.svg';
import './App.css';
import { ClassComponent } from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <>
    <h1>Hello World!</h1>
    <ClassComponent firstName = "Aman"/>
    <FunctionalComponent lastName = "Mittal"/>
    </>
  );
}

export default App;
