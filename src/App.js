import './App.css';
import Home from './pages/Home/Home';
import { Route,Routes } from 'react-router';
import Admin from './pages/Admin/Admin';
import HomeDirectory from './pages/HomeDirectory/HomeDirectory';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeDirectory/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
  );

}
export default App;