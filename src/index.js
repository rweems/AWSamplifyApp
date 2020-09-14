import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure({
    "aws_project_region": "us-east-2",
    "aws_cognito_identity_pool_id": "us-east-2:6b9e4218-9ce9-4baa-9089-8f8d19a2fc36",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_5dWyw4SJ0",
    "aws_user_pools_web_client_id": "6hoh6kblh1dt0pv2phmotls7d7",
    "oauth": {}
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

