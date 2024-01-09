import { defineConfig } from 'cypress'

export default defineConfig({
  
  e2e: {
    
    
"baseUrl":"https://belsioweb.azurewebsites.net/auth/login",
    "specPattern":[
        "cypress/e2e/login.cy.ts",
        "cypress/e2e/forgotPass.cy.ts",
    ],
    "env": {
      "username": "",
      "password": "",

    },
   "defaultCommandTimeout": 20000,
   "chromeWebSecurity": false,
   "requestTimeout": 180000,
   "responseTimeout": 180000,
   "pageLoadTimeout": 180000,
    setupNodeEvents(on, config) {
     
      
      // implement node event listeners here
      const cache: any = {
        id: {},
      };
      module.exports = (on: any, config: any) => {
        
      };
      
    },
  },
});
