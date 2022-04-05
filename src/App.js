import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/Home/Home';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Activities from './Components/Activities/Activities';
import Header from './Components/Header/Header';
import Volunteer from './Components/Volunteer/Volunteer';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/main' element={<Main></Main>}></Route>
        <Route path='/volunteer' element={<Volunteer></Volunteer>}></Route>
        <Route path='/activities' element={<Activities></Activities>}></Route>
      </Routes>
    </div>
  );
}

export default App;
