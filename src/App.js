import { Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import LandingPage from "./pages/landing-page/landing-page.component";
import ComparisonPage from "./pages/comparison-page/comparison-page.component";
import ResultsPage from "./pages/results-page/results-page.component";

const App = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Switch>
        <Route
          exact
          path="/compare"
          render={() => isAuthenticated ? <ComparisonPage /> : <LandingPage />}
        />
        <Switch>
          <Route exact path="/results" component={ResultsPage} />
        </Switch>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
