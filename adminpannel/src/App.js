
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from "./Sidebar/Sidebar"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import AddData from './Components/Pages/AddData';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
function App() {
  const [toggle,setToggle]=useState(false)
  function Toggle(){
    setToggle(!toggle)
  }
  return (
    <BrowserRouter>
   <div className='d-flex'>
    <div className={toggle ? "d-none":'w-auto'}> 
    {/* //position-fixed */}
      <Sidebar />
    </div>
    <div className='col overflow-auto'>
    <Navbar Toggle={Toggle}/>
      <Routes>
        <Route path='/' element={<AddData/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}>
        </Route>
      </Routes>
    </div>
   </div>
   </BrowserRouter>
  );
}

export default App;
