import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import GlobalStyle from './globalStyles';
import Container from './Container';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <GlobalStyle />
        <Container></Container>
  </React.StrictMode>,
)

