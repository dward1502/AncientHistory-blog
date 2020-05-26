import React from 'react';

import AHLogo from '../../assets/images/AncientHistoryLogo.png'

const Logo = (props) => {
  return (
    <div className='Logo'>
      <img src={AHLogo} alt="Ancient History Logo"/>
    </div>
  );
};

export default Logo;