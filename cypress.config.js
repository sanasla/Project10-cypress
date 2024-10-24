const { defineConfig } = require("cypress");

module.exports = defineConfig({

  
  env: {
    screenshotOnRunFailure: true,
    apiUrl: "http://localhost:8081",
    username: "test2@test.fr",
    password: "testtest",
  },



  e2e: {
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {},

    baseUrl: "http://localhost:8080",
  },
});

 
 