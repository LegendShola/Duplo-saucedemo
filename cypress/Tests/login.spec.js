import loginPage from '../Pages/loginPage'; // Importing the LoginPage object
const data = require('../fixtures/testData.json'); // Import the test data from a JSON file

describe('Login Tests', () => {
    // Extracting test credentials from fixture data
    const username = data.username; // Assign username from test data
    const password = data.password; // Assign password from test data

    before(() => {
        // Setup actions to be executed once before all tests in this suite
        cy.clearCookies(); // Clear cookies to ensure a fresh session
        cy.clearLocalStorage(); // Clear local storage for a clean state
        
        loginPage.visit(); // Visit the login page before running tests
    });

    // Test case to verify successful login
    it('Should log in successfully', () => {
        loginPage.login(username, password); // Perform login with test credentials
        cy.url().should('include', '/inventory.html'); // Verify the URL contains '/inventory.html' after logging in
    });
});
