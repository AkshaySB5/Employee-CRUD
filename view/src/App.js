
import './App.css';
import Addemployee from './components/Addemployee';
import Employeelist from './components/Employeelist';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
       <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Employeelist/>}/>
          <Route path="/" element={<Employeelist/>}/>
          <Route path="/add" element={<Addemployee/>}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
