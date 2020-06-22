import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieList from "./components/MovieList";
import SideBarMenu from "./components/SideBarMenu";
import LikeList from "./components/LikeList";
import BlockList from "./components/BlockList";


class App extends Component {
  state = {
    visible: false,
  };

  handleHomeClick(e) {
    e.preventDefault();
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <Router>
        <SideBarMenu
          visible={this.state.visible}
          handleHomeClick={(e) => this.handleHomeClick(e)}
        />

        <div className="container">
          <div className="card-panel light-blue lighten-3 center">
            <h3 id="title" onClick={(e) => this.handleHomeClick(e)}>
              Movies List Menu
            </h3>

            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/movieslist">
                <MovieList />
              </Route>
              <Route exact path="/likedlist">
                <LikeList />
              </Route>
              <Route exact path="/blockedlist">
                <BlockList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
