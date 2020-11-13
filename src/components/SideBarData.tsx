import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [
  {
    title: 'Plays',
    path: '/plays',
    icon: <BsIcons.BsFillPlayFill />,
    cName: 'nav-text'
  },
  {
    title: 'PlayBooks',
    path: '/playbooks',
    icon: <BsIcons.BsFillPlayFill />,
    cName: 'nav-text'
  },
  {
    title: 'Perfil',
    path: '/profile',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
];