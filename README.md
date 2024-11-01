# E2E Testing for SauceDemo Application

This project is an end-to-end (E2E) testing suite for the SauceDemo application using Cypress. The suite covers functionalities such as login, logout, cart operations, inventory management, and checkout processes. It leverages the Page Object Model (POM) to enhance maintainability and readability.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Test Data](#test-data)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The project consists of the following main components:

- **Page Objects**: Encapsulate the UI interactions for different pages (Login, Inventory, Cart, Checkout, Logout).
- **Tests**: Test suites that validate the application functionalities using the Cypress framework.

### Page Objects

- `LoginPage`: Handles actions related to user login.
- `InventoryPage`: Manages inventory-related actions, including filtering and adding items to the cart.
- `CartPage`: Handles operations related to viewing and modifying the shopping cart.
- `CheckoutPage`: Manages the checkout process.
- `LogoutPage`: Handles user logout actions.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/LegendShola/Duplo-saucedemo.git
   cd YourRepoName
