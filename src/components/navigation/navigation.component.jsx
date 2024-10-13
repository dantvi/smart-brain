import './navigation.styles.css';

const Navigation = ({ onRouteChange }) => {
  return (
    <nav>
      <p onClick={() => onRouteChange('sign-in')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
  );
}

export default Navigation;
