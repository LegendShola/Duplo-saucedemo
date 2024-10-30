import loginPage from '../Pages/loginPage';
const data = require('../fixtures/testData.json'); // Import the testData

describe('Login Tests', () => {

    // Test credentials from fixture data
    const username = data.username;
    const password = data.password;

    before(() => {
        cy.clearCookies(); // Clear cookies before each test
        cy.clearLocalStorage(); // Clear local storage before each test
        
        loginPage.visit();
    });

    it('Should log in successfully', () => {
        loginPage.login(username, password);
        cy.url().should('include', '/inventory.html');
    });
});
