import React from 'react';

import Logo from './Logo';
import SideBarToggle from './SidebarToggle'


const Navbar = (props) => {
  return (
    <header className='Toolbar'>
      <div className='Logo_container'>
        <Logo/>
      </div>
      <SideBarToggle clicked={props.SideBarToggleClicked}/>
      
    </header>
  );
};

export default Navbar;