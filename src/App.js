import React from "react";

// components
import Home from "components/home";
import Authentication from "components/authentication";
// styles
import GlobalStyle from "themes/globalStyle";
import Wrapper from "themes/wrapper";
import { StyledListNavigation, StyledLink } from "./themes/navigation";
// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Router>
        <StyledListNavigation>
          <StyledLink>
            <Link to="/">Home</Link>
          </StyledLink>
          <StyledLink>
            <Link to="/auth">Auth</Link>
          </StyledLink>
        </StyledListNavigation>

        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Authentication} />
        <Route />
      </Router>
    </Wrapper>
  );
};

export default App;
