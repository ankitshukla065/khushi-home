import React from 'react';
import RouteProvider from './modules/RouteProvider';
import './assets/css/main_styles.css';
import './assets/css/responsive.css';
import 'react-owl-carousel2/lib/styles.css';
import './assets/css/owl.theme.default.scss';
import './assets/css/animate.css';
import './assets/css/index.scss';

function App() {
  return (
      <RouteProvider />
  );
}

export default App;
