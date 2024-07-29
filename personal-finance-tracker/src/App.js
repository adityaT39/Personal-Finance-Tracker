import React from 'react';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <div>
        <h1>Welcome to the Finance Tracker</h1>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;