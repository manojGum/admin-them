import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./style.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const [active,setActive]= useState(1)
  return (
    <div className='sidebar d-flex justify-content-between flex-column bg-secondary text-white p-3 vh-100'>
        <div>
            <Link to="#" className='p-3 text-decoration-none text-white'>
                <i className='bi bi-building fs-4 me-4'></i>
                <span className='fs-3'>INT BOAT</span>
            </Link>
            <hr className='text-secondary mt-2'></hr>
            <ul className='nav nav-pills flex-column mt-2'>
                <li className={active === 1 ? 'active nav-item':'nav-item'} onClick={e => setActive
                (1)}>
                    <Link to="/" className='p-1 text-decoration-none text-white'> 
                    <i className='bi bi-speedometer2 me-3 fs-4'></i>
                    <span className='fs-4'>Dashboard</span>
                    </Link>
                </li>
                <li className={active === 2 ? 'active nav-item':'nav-item'} onClick={e => setActive
                (2)}>
                      <Link to="/register" className='p-1 text-decoration-none text-white'> 
                    <i className='bi bi-person-add me-3 fs-4'></i>
                    <span className='fs-4'>Register</span>
                    </Link>
                </li>
                <li className={active === 3 ? 'active nav-item':'nav-item'} onClick={e => setActive
                (3)}>
                      <Link to="/login" className='p-1 text-decoration-none text-white'> 
                    <i className='bi bi-person-square me-3 fs-4'></i>
                    <span className='fs-4'>Login</span>
                    </Link>
                </li>
                <li className={active === 4 ? 'active nav-item':'nav-item'} onClick={e => setActive
                (4)}>
                      <Link to="/add" className='p-1 text-decoration-none text-white'> 
                    <i className='bi bi-textarea-resize me-3 fs-4'></i>
                    <span className='fs-4'>Add Data</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div>
            <hr className='text-white'></hr>
            <div className='nav-item p-2'>
                <Link to="/account" className='p-1 text-decoration-none text-white'>
                    <i className='bi bi-person-circle me-3 fs-4'></i>
                    <span className='fs-4'>you</span>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Sidebar