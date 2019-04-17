import Auth from './__mocks__/Auth'

const auth = new Auth();

test('Authentication', () => {
    console.log(auth.isAuthenticated())
  });