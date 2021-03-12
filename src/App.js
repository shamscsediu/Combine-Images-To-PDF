import React, { Component } from "react";
import Particles from "react-tsparticles";
import songBack from "./assets/true.mp3";
import "./App.css";
import FileUpload from "./components/fileUpload/fileUpload";
import HeaderArea from "./components/header/headerArea";

class App extends Component {
  constructor(props) {
    super(props);
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }
  particlesLoaded(container) {}
  render() {
    
    return (
      <div>
        <Particles
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            background: {
              color: {
                value: "#111",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
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
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
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
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <audio autoPlay={true} loop={true} src={songBack}></audio>
        <HeaderArea />
        <div className="tc">
          <h1 className="f2 p-2 white">
            Combines your images into PDF file here,Simple and Easy
          </h1>
          <FileUpload />
        </div>
      </div>
    );
  }
}

export default App;
