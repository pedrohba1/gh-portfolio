import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "~/pages/Home";
import Projects from "~/pages/Projects";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/gh-portfolio">
                    <Home />
                </Route>
                <Route path="/gh-portfolio/projects">
                    <Projects />
                </Route>
            </Switch>
        </Router>
    );
}
