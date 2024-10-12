import Tilt from 'react-parallax-tilt';
import brain from '../../assets/brain.png'
import './logo.styles.css'

const Logo = () => {
  return (
    <div className="logo-container ma4 mt0">
      <Tilt>
        <div className='logo br2 shadow-2'>
          <img src={brain} alt="Icon of a brain symbolizing thinking" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
