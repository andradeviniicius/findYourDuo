import logo from '../../assets/Logo.svg'
import './styles.css'

function Logo() {
  return (
    <div className='defaultLogo'>
      <img className='defaultLogo__img' src={logo} alt="" />
    </div>
  );
}

export default Logo;
