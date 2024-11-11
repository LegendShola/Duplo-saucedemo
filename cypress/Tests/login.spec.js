import loginPage from '../Pages/loginPage'; // Importing the LoginPage object
const data = require('../fixtures/testData.json'); // Import the test data from a JSON file

/**
 * This function tests the login functionality of the application.
 * It covers scenarios for successful login, invalid login credentials, SQL injection attempts, and maintaining login state after browser refresh.
 *
 * @param {Object} loginPage - The LoginPage object containing methods for interacting with the login page.
 * @param {Object} data - The test data object containing various test credentials and data.
 * @param {string} data.username - The valid username for login.
 * @param {string} data.password - The valid password for login.
 * @param {string} data.invalidUsername - The invalid username for login.
 * @param {string} data.invalidPassword - The invalid password for login.
 * @param {string} data.sqlInjectionUsername - The username with SQL injection attempt.
 * @param {string} data.sqlInjectionPassword - The password with SQL injection attempt.
 *
 * @returns {void}
 */

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
        cy.url().should('include', '/inventory.html'); // Assert the URL contains '/inventory.html' after logging in
    });

    // Test case to verify that an error message is displayed for invalid login credentials
    xit('Should display an error message for invalid login credentials', () => {
        const username = data.invalidUsername; // Fetching invalid username from test data
        const password = data.invalidPassword; // Fetching invalid password from test data
    
        loginPage.login(username, password); // Performing login with invalid credentials
        loginPage.assertInvalidCredentials(); // Asserting that an error message is displayed
    });
    
    // Test case to verify that SQL injection attempts are prevented in login fields
    xit('Should prevent SQL injection attempts in login fields', () => {
        const username = data.sqlInjectionUsername; // Fetching username with SQL injection attempt from test data
        const password = data.sqlInjectionPassword; // Fetching password with SQL injection attempt from test data
    
        loginPage.login(username, password); // Performing login with SQL injection attempt
        loginPage.assertSQLInjection(); // Asserting that SQL injection attempt is prevented
    });
    
    // Test case to verify that login state is maintained after browser refresh
    xit('Should maintain login state after browser refresh', () => {
        loginPage.login(username, password); // Performing login with valid credentials
        cy.reload(); // Reloading the browser
        loginPage.assertRefreshState(); // Asserting that login state is maintained after browser refresh
    });
});
