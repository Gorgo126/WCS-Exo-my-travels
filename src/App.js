import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Wonderful and not interested Travels</h1>
        </header>
        <Travel
          destination="Bulgarie"
          country="Belgium"
          distance="2000 Km !"
          photo="https://back-visiteurope.orchestra-platform.com/admin/TS/fckUserFiles/Content_Image/B2C/destinations/page_destination/croatie/voyage-croatie-autotour.jpg"
        />
        <Travel
          destination="Jamaica"
          country="Belgium"
          distance="5 Km seulement"
          photo="https://voyages-auchan.onelist.fr/Portals/24/01.JPG"
        />
      </div>
    );
  }
}

export default App;
