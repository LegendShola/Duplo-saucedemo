import loginPage from '../Pages/loginPage'; // Importing the LoginPage object
import logoutPage from '../Pages/logoutPage'; // Importing the LogoutPage object
const data = require('../fixtures/testData.json'); // Import the test data from a JSON file

describe('Logout Tests', () => {
    // Extracting test credentials from fixture data
    const username = data.username; // Assign username from test data
    const password = data.password; // Assign password from test data

    before(() => {
        // Setup actions to be executed once before all tests in this suite
        cy.clearCookies(); // Clear cookies to ensure a fresh session
        cy.clearLocalStorage(); // Clear local storage for a clean state
        
        cy.visit(''); // Visit the base URL before running tests
        loginPage.login(username, password); // Perform login with test credentials
    });

    // Test case to verify successful logout
    it('Should log out successfully', () => {
        logoutPage.logout(); // Perform logout action
        logoutPage.verifyLogout(); // Verify that logout was successful by checking the URL
    });
});
