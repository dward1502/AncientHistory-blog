import React from 'react';

const SidebarToggle = (props) => {
  return (
    <div className='sideBarToggle' onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SidebarToggle;