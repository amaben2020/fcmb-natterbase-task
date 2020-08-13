import React, { Component } from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Cards from "../Components/Cards/Cards";
import "./App.css";
import SearchPage from "../Components/SearchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FinalOverview from "../Components/FinalOverview";
import Menu from "../Components/Menu/Menu";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/search/:searchTerm">
              <div className="app__page">
                <Sidebar /> <SearchPage />
              </div>
            </Route>{" "}
            <Route path="/">
              <div className="app__page">
                <Sidebar /> <Cards /> <Menu /> <FinalOverview />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
