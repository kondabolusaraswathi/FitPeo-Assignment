import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import GlobalStyle from './globalStyles';
import Container from './Container';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <App /> */}
    <Container></Container>
  </React.StrictMode>,
  document.getElementById('root')
);

