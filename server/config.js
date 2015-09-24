var argv = require('yargs').default('production', false).argv;

module.exports = {
  jwtSecret: 'e6f3517990a148af891379a0eea24921',
  port: process.env.PORT || 8000,
  url: argv.production ? 'https://nu-pomodoro.herokuapp.com/' : 'http://localhost:8000',
  publicPath: argv.production ? './public/production' : './public/development'
};