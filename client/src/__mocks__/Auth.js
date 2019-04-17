const auth0 = jest.genMockFromModule('auth0-js');
let history = Object.create(null);

export default class Auth {
    hostnames = { local: "localhost:3000" };
    qu_env = "testing";
    hostname = this.hostnames[this.qu_env];

    auth0 = new auth0.WebAuth({
        domain: 'queerundefined.auth0.com',
        clientID: 'client-testing-id',
        redirectUri: 'http://' + this.hostname + '/callback',
        audience: 'https://queerundefined.auth0.com/userinfo', //?
        responseType: 'token id_token',
        scope: 'openid'
    });

    constructor() {
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    handleAuthentication() {
        history.push("/potentialdefs");
      }
    
    isAuthenticated() { return false } 
  }
