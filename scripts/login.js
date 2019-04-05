import '../page-repos/login-repo';
import '../actions/allactions';

describe('Login Page', function() {
    it('should able to login', function() {
      browser.get('https://istar.kokomo247.com/login');
      Actions.enterValues('css', loginModels.emailid, 'krishna@pradiota.com');
      Actions.enterValues('css', loginModels.password, 'passw0rd');
      Actions.click('css', loginModels.submit);
      browser.waitForAngular();
    });
  });