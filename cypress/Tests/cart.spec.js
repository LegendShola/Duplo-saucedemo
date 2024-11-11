import loginPage from '../Pages/loginPage';
import inventoryPage from '../Pages/inventoryPage';
import cartPage from '../Pages/cartPage';
import logoutPage from '../Pages/logoutPage'; // Importing the LogoutPage object
// import { beforeEach } from 'mocha';
const data = require('../fixtures/testData.json'); // Import the test data from a JSON file

describe('Cart Tests', () => {
    // Test credentials obtained from fixture data
    const username = data.username; // Assign username from the test data
    const password = data.password; // Assign password from the test data

    // Setup to run before each test
    xbefore(() => {
        cy.clearCookies(); // Clear cookies before each test to ensure a clean session
        cy.clearLocalStorage(); // Clear local storage before each test for fresh state

        cy.visit(''); // Visit the base URL (defined in Cypress config)
        loginPage.login(username, password); // Perform login with the test credentials
    });


    // Test case to check if items are displayed in the cart
    it('Should display items in cart', () => {
        cy.visit(''); // Visit the base URL (defined in Cypress config)
        loginPage.login(username, password); // Perform login with the test credentials
        inventoryPage.addToCart('Sauce Labs Backpack'); // Add an item to the cart
        cartPage.viewCart(); // Navigate to the cart
        cartPage.verifyCartItems(); // Assert that the items in the cart are visible
    });

    // Test case to check if an item can be removed from the cart
    it('Should remove an item from cart', () => {
        cy.visit(''); // Visit the base URL (defined in Cypress config)
        loginPage.login(username, password); // Perform login with the test credentials
        inventoryPage.addToCart('Sauce Labs Backpack'); // Add an item to the cart
        cartPage.viewCart(); // Navigate to the cart
        cartPage.removeItem(); // Remove the item from the cart
        // Verify that the item has been successfully removed
        cartPage.verifyItemRemoval(); // Assert that the item no longer exists in the cart
    });

});
