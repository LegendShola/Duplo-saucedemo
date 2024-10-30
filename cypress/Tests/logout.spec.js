import loginPage from '../Pages/loginPage';
import logoutPage from '../Pages/logoutPage';
const data = require('../fixtures/testData.json'); // Import the testData

describe('Logout Tests', () => {
    // Test credentials from fixture data
    const username = data.username;
    const password = data.password;
    
    before(() => {
        cy.clearCookies(); // Clear cookies before each test
        cy.clearLocalStorage(); // Clear local storage before each test
        
        cy.visit('');
        loginPage.login(username, password);
    });

    it('Should log out successfully', () => {
        logoutPage.logout();
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});
