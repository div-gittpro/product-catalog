
# Product Catalog – Angular + Cypress

A simple product catalog application built with **Angular (standalone components)** and fully tested using **Cypress E2E tests**.

## Features
- Displays a list of products
- Search/filter products by name
- View product details in a modal
- Close modal interaction
- End-to-end tested using Cypress

## Tech Stack
- Angular (v19, Standalone Components)
- TypeScript
- Cypress (E2E Testing)

## Project Structure


src/
├── app/
│ ├── components/
│ │ ├── product-list/
│ │ └── product-details/
│ ├── models/
│ └── app.component.ts
├── assets/
│ └── products.json
cypress/
└── e2e/
└── product-catalog.cy.js


## Getting Started

### Install dependencies
```bash
npm install

Run the application
ng serve


Open http://localhost:4200

Run Cypress Tests
Open Cypress UI
npx cypress open

Run tests headlessly
npx cypress run


All tests should pass successfully.

Test Coverage

Initial product load

Search functionality

Open product details modal

Close product details modal

Author

Divye Mandhyan
GitHub: https://github.com/div-gittpro




