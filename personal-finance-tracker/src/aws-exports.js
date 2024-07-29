const awsconfig = {
    aws_project_region: 'ca-central-1',
    aws_cognito_region: 'ca-central-1',
    aws_user_pools_id: 'ca-central-1_S9zXbBNeU',
    aws_user_pools_web_client_id: '5vv9lam4bsfdfnenj2il39uglg',
    oauth: {
      domain: 'https://saveit.auth.ca-central-1.amazoncognito.com',
      scope: ['email', 'profile', 'openid'],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'code'
    }
  };
  
  export default awsconfig;
  