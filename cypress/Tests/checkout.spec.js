import loginPage from '../Pages/loginPage';
import inventoryPage from '../Pages/inventoryPage';
import cartPage from '../Pages/cartPage';
import checkoutPage from '../Pages/checkoutPage';
const data = require('../fixtures/testData.json'); // Import the testData

const firstName = data.firstName;
const lastName = data.lastName;
const postalCode = data.postalCode;

describe('Checkout Tests', () => {
    before(() => {
        cy.clearCookies(); // Clear cookies before each test
        cy.clearLocalStorage(); // Clear local storage before each test
        
        // Test credentials from fixture data
        const username = data.username;
        const password = data.password;

        cy.visit('');
        loginPage.login(username, password);
        inventoryPage.addToCart('Sauce Labs Backpack');
        cartPage.viewCart();
    });

    it('Should complete the checkout process', () => {
        checkoutPage.startCheckout();
        checkoutPage.enterCheckoutInfo(firstName, lastName, postalCode);
        checkoutPage.verifyTotalPrice();
        checkoutPage.finishCheckout();
    });
});
