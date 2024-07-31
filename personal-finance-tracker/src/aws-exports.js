const awsconfig = {
  aws_project_region: 'ca-central-1',
  aws_cognito_region: 'ca-central-1',
  aws_user_pools_id: 'ca-central-1_S9zXbBNeU',
  aws_user_pools_web_client_id: '5vv9lam4bsfdfnenj2il39uglg',
  oauth: {
    domain: 'saveit.auth.ca-central-1.amazoncognito.com',
    scope: ['email', 'profile', 'openid', 'userinfo.email', 'userinfo.profile', 'user.addresses.read', 'user.birthday.read'],
    redirectSignIn: 'http://localhost:3000/',
    redirectSignOut: 'http://localhost:3000/',
    responseType: 'code',
    options: {
      googleClientId: '25082539421-noeujoh2u3p6rsrtp76rkbk5rrrf89no.apps.googleusercontent.com', 
    }
  }
};

export default awsconfig;
