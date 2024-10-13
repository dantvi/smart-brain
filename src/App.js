import { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from "./components/navigation/navigation.component";
import SignIn from './components/sign-in/sign-in.component';
import Register from './components/register/register.component';
import Logo from "./components/logo/logo.component";
import Rank from "./components/rank/rank.component";
import ImageLinkForm from "./components/image-link-form/image-link-form.component";
import FaceRecognition from './components/face-recognition/face-recognition.component';
import './App.css';


///////////////////////////////////////////////////////////////////////////////////////////////////
// Clarifai Request Options
///////////////////////////////////////////////////////////////////////////////////////////////////

const MODEL_ID = 'face-detection';

const returnClarifaiRequestOptions = (imageUrl) => {
  // Change PAT (Personal Access Token), USER_ID and APP_ID
  const PAT = 'PAT';
  const USER_ID = 'USER_ID';
  const APP_ID = 'APP_ID';

  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions;
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'sign-in',
      isSignedIn: false
    }
  }

  // Currently not in use! Fix later! 
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // Clarifai API
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", returnClarifaiRequestOptions(this.state.input))
      .then(response => response.json())
      .then(result => {

        console.log(result);

        const regions = result.outputs[0].data.regions;

        regions.forEach(region => {
          // Accessing and rounding the bounding box values
          const boundingBox = region.region_info.bounding_box;
          const topRow = boundingBox.top_row.toFixed(3);
          const leftCol = boundingBox.left_col.toFixed(3);
          const bottomRow = boundingBox.bottom_row.toFixed(3);
          const rightCol = boundingBox.right_col.toFixed(3);

          region.data.concepts.forEach(concept => {
            // Accessing and rounding the concept value
            const name = concept.name;
            const value = concept.value.toFixed(4);

            console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);

          });
        });

      })
      .catch(error => console.log('error', error));
  }


  onRouteChange = (route) => {
    if (route === 'sign-out') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }

  render() {
    const { isSignedIn, imageUrl, route } = this.state;
    return (
      <div className="App">
        <ParticlesBg num={5} type="circle" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' ?
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition imageUrl={imageUrl} />
          </div>
          : (
            route === 'sign-in' || route === 'sign-out' ?
              <SignIn onRouteChange={this.onRouteChange} />
              :
              <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
