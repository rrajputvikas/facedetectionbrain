import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceDetection from "./components/FaceDetection/FaceDetection";
import Signin from "./components/Signin/Signin";
import Registration from "./components/Registration/Registration";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Clarifai from "clarifai";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "Your API Key...",
});

// Particles Properties
const particlesOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 700,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);

    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false,
    };
  }
  // Particles Initialization
  async particlesInit(engine) {
    await loadSlim(engine);
  }

  calculateFaceLocation = (data) => {
    const predictedFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: predictedFace.left_col * width,
      topRow: predictedFace.top_row * height,
      rightCol: width - predictedFace.right_col * width,
      bottomRow: height - predictedFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  // .then(response => console.log(response.outputs[0].data.regions[0].region_info.bounding_box))
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict("face-detection", this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    else if(route === 'signout'){
      this.setState({isSignedIn: false})
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div>
        {/* Particles Component */}
        <Particles
          className="particles"
          id="tsparticles"
          init={this.particlesInit}
          options={particlesOptions}
        />

        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} route={this.state.route} />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceDetection
              imageUrl={this.state.imageUrl}
              box={this.state.box}
            />
          </div>
        ) : this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Registration />
        )}
      </div>
    );
  }
}

export default App;
