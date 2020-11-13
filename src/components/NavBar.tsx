
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import '../styles/Navbar.css';
import { IconContext } from 'react-icons';
import { userLogout } from '../redux/actions/user';
import { useDispatch } from 'react-redux';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();

  const logOut = () =>  {
    dispatch(userLogout());
  };
  const showSidebar = () => setSidebar(!sidebar);

  return (
      <IconContext.Provider value={{ color: '#ffff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to='/login' className='menu-bars'>
            <BiIcons.BiLogOut onClick={logOut}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
  );
}

export default Navbar;