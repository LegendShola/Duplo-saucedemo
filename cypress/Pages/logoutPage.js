class LogoutPage {
    // Method to log the user out from the application
    logout() {
        // Clicks the burger menu button to open the side menu
        cy.get('#react-burger-menu-btn').click();
        
        // Clicks the logout link in the side menu
        cy.get('#logout_sidebar_link').click();
    }

    // Method to verify that the user has been logged out
    verifyLogout() {
        // Asserts that the current URL is the Sauce Demo homepage, indicating a successful logout
        cy.url().should('eq', 'https://www.saucedemo.com/');
    }
}

// Exports an instance of LogoutPage for use in tests
export default new LogoutPage();
