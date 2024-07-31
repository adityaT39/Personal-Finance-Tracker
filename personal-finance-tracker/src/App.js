import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import Login from './components/login';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      <Login />
    </Authenticator>
  );
}

export default App;
