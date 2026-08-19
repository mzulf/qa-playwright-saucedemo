# Web UI Automation Testing - SauceDemo

Repository ini berisi framework **End-to-End (E2E) Test Automation** untuk menguji aplikasi e-commerce [SauceDemo](https://www.saucedemo.com/) menggunakan **Playwright** dan **JavaScript**.

## Features & Scope Tested
- **Authentication:** Positive & Negative Login Scenarios (Locked user verification).
- **Shopping Cart:** Adding items to cart & badge validation.

## Tech Stack & Architecture
- **Framework:** Playwright
- **Design Pattern:** Page Object Model (POM)
- **Language:** JavaScript
- **CI/CD:** GitHub Actions
- **Reporting:** HTML Playwright Reporter

##  Repository Structure
```TESTPLAYWRIGHT
├── .github/workflows/   # CI/CD Pipeline Configuration
├── docs/                # Test Cases Documentation
├── pages/               # Page Object Model (Locators & Actions)
├── tests/               # Test Suite Scripts
└── playwright.config.js # Framework Configurations