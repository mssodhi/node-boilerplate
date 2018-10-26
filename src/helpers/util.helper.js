const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const passwordRegex = new RegExp('^(?=.*[0-9])(?=.{7,})');
module.exports = {
  isProd() {
    return process.env.NODE_ENV === 'production';
  },
  isEmailValid(email) {
    return emailRegex.test(email);
  },
  isPasswordValid(password) {
    return passwordRegex.test(password);
  }
};
