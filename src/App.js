import React from "react";
import NavBar from "./Components/NavBar";
import HeroImg from "./Components/HeroImg";
import Catagories from "./Components/Catagories";
import LatestRecipes from "./Components/LatestRecipes.jsx";
import MiddleNav from "./Components/MiddleNav";
import { Route, Switch } from "react-router-dom";
import KeywordComponent from "./Components/KeywordComponent.jsx";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <HeroImg />
      <MiddleNav />
      <Switch>
        <Route exact path="/catagories" component={Catagories} />
        <Route path="/keywords" component={KeywordComponent} />
        <Catagories />
        <KeywordComponent />
      </Switch>
      <LatestRecipes />
    </>
  );
};
export default App;
