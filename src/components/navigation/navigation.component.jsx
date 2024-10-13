import './navigation.styles.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <p onClick={() => onRouteChange('sign-out')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
      </nav>
    );
  } else {
    return (
      <nav>
        <p onClick={() => onRouteChange('sign-in')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
      </nav>
    );
  }
}

export default Navigation;
