import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {Loader} from '../components/loader';

const AsyncHome = lazy(() => import("../pages/home"));
const AsyncAbout = lazy(() => import("../pages/about"));
const AsyncContact = lazy(() => import("../pages/contact"));

class RouteProvider extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Route exact path="/about" component={AsyncAbout} />
          <Route exact path="/contact" component={AsyncContact} />
          <Route exact path="/" component={AsyncHome} />
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default RouteProvider;
