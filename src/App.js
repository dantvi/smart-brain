import ParticlesBg from 'particles-bg';
import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/logo/logo.component";
import Rank from "./components/rank/rank.component";
import ImageLinkForm from "./components/image-link-form/image-link-form.component";
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBg num={5} type="circle" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
