const core = require('@actions/core');
const github = require('@actions/github');

try {
  const token = core.getInput('token');
  if(token) {
    console.log('Found token: ', token);
  } else {
    console.log('No token: ', token);
  }
} catch (error) {
  core.setFailed(error.message);
}