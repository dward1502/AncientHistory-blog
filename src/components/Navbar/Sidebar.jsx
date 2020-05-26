import React from 'react';
import { Link } from 'gatsby'

import Backdrop from '../UI/Backdrop'
import Logo from './Logo'

const Sidebar = (props) => {

  let attachedClasses = [`SideBar`, `Close`]
  if(props.open) {
    attachedClasses = [`SideBar`, `Open`]
  }
  
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className="Logo-sidebar_container">
          <Logo/>
          <nav>
            <ul className="NavigationItems">
              <li className="NavigationItem">
                <Link to='/knowledge'>Knowledge</Link>
              </li>
              <li className="NavigationItem">
                <Link to='/theories'>Theories</Link>
              </li>
              <li className="NavigationItem">
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;