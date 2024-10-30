class LogoutPage {
    logout() {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    }
}

export default new LogoutPage();
