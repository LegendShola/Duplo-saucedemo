import loginPage from '../Pages/loginPage'; // Importing the LoginPage object
import inventoryPage from '../Pages/inventoryPage'; // Importing the InventoryPage object
const data = require('../fixtures/testData.json'); // Import the test data from a JSON file

describe('Inventory Tests', () => {
    // Extracting test credentials from fixture data
    const username = data.username; // Assign username from test data
    const password = data.password; // Assign password from test data

    before(() => {
        // Setup actions to be executed once before all tests in this suite
        cy.clearCookies(); // Clear cookies to ensure a fresh session
        cy.clearLocalStorage(); // Clear local storage for a clean state
        
        loginPage.visit(); // Visit the login page
        loginPage.login(username, password); // Log in using the test credentials
    });

    // Test case to verify inventory functionality
    it('Should display inventory list', () => {
        inventoryPage.verifyInventoryList(); // Verify the inventory list is displayed
        
        // Filter items by "Price (low to high)"
        inventoryPage.filterProducts('lohi'); // Apply low to high price filter
        
        // Filter items by "Name (Z to A)"
        inventoryPage.filterProducts('za'); // Apply Z to A name filter
        
        // Add an item to the cart
        inventoryPage.addToCart('Sauce Labs Backpack'); // Add the specified item to the cart
    });

});
