require('babel-register');
const config = require('../../config');

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],

  selenium: {
    start_process: false,
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'hub',
      silent: true,
      globals: {
        devServerURL: 'http://nginx',
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['--no-sandbox'],
        },
      },
    },
  },
};
