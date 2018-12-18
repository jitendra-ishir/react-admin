import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Navigation />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
