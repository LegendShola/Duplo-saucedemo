import loginPage from '../Pages/loginPage'; // Importing the LoginPage object
import inventoryPage from '../Pages/inventoryPage'; // Importing the InventoryPage object
import cartPage from '../Pages/cartPage'; // Importing the CartPage object
import checkoutPage from '../Pages/checkoutPage'; // Importing the CheckoutPage object
const data = require('../fixtures/testData.json'); // Import the test data from a JSON file

// Extracting test data from the fixture
const firstName = data.firstName; // Assign first name from test data
const lastName = data.lastName; // Assign last name from test data
const postalCode = data.postalCode; // Assign postal code from test data

describe('Checkout Tests', () => {
    before(() => {
        // Setup actions to be executed once before all tests in this suite
        cy.clearCookies(); // Clear cookies to ensure a fresh session
        cy.clearLocalStorage(); // Clear local storage for a clean state
        
        // Test credentials from fixture data
        const username = data.username; // Assign username from test data
        const password = data.password; // Assign password from test data

        cy.visit(''); // Visit the base URL (defined in Cypress config)
        loginPage.login(username, password); // Log in using the test credentials
        inventoryPage.addToCart('Sauce Labs Backpack'); // Add an item to the cart
        cartPage.viewCart(); // Navigate to the cart
    });

    // Test case to complete the checkout process
    it('Should complete the checkout process', () => {
        checkoutPage.startCheckout(); // Start the checkout process
        checkoutPage.enterCheckoutInfo(firstName, lastName, postalCode); // Enter checkout information
        checkoutPage.verifyTotalPrice(); // Verify the total price is correct
        checkoutPage.finishCheckout(); // Complete the checkout process
    });
});
