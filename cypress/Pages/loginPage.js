class LoginPage {
    // Method to visit the Sauce Demo login page
    visit() {
        // Navigates to the specified URL
        cy.visit('https://www.saucedemo.com');
    }

    // Method to enter the username into the username input field
    enterUsername(username) {
        // Types the provided username into the username input field
        cy.get('#user-name').type(username);
    }

    // Method to enter the password into the password input field
    enterPassword(password) {
        // Types the provided password into the password input field
        cy.get('#password').type(password);
    }

    // Method to submit the login form
    submit() {
        // Clicks the login button to submit the form
        cy.get('#login-button').click();
    }

    // Method to perform the complete login process using username and password
    login(username, password) {
        // Calls the enterUsername, enterPassword, and submit methods in sequence
        this.enterUsername(username);
        this.enterPassword(password);
        this.submit();
    }

    assertInvalidCredentials() {
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    }

    assertSQLInjection() {
        cy.url().should('not.include', '/inventory.html');
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    }

    assertRefreshState() {
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
        cy.get('#react-burger-menu-btn').should('be.visible');
    }
}

// Exports an instance of LoginPage for use in tests
export default new LoginPage();
