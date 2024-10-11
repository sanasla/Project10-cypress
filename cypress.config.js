const { defineConfig } = require("cypress");

module.exports = defineConfig({

  
  env: {
    apiUrl: "http://localhost:8081",
    username: "test2@test.fr",
    password: "testtest",
  },



  e2e: {
    setupNodeEvents(on, config) {},
  },
});

 
 