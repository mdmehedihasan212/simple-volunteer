import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/main' element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
