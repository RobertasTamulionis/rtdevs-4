import LogoIcon2 from '../../assets/images/svg/logo-2.svg?react';
import './logo.scss';

function Logo() {
  return (
    <div className='logo'>
      <figure className='logo__icon-wrapper'>
        <LogoIcon2/>
      </figure>
    </div>
  )
};

export default Logo;