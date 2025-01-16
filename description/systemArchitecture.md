# System Architecture and Data Flow
## Key Components
### Sanity CMS for Data Management:
Sanity CMS serves as the backend database, managing all product data, customer information, and order records. It allows for dynamic content updates and efficient data retrieval.

### ShipEngine for Shipment Process:
ShipEngine is integrated to handle the shipment process, providing real-time tracking information for orders. This ensures that users can monitor their shipments seamlessly.

### Stripe for Payment Processing:
Stripe is utilized as the payment gateway, ensuring secure and efficient processing of transactions. It handles payment details and provides confirmation back to the user.

### Interaction of Sanity with Frontend:
The frontend, built with Next.js, interacts with Sanity CMS through a dedicated Product Data API. This API fetches product listings and details, which are dynamically displayed on the site. When users place orders, the order details are sent back to Sanity for record-keeping.

## High-Level System Architecture Diagram Link:
### [https://www.figma.com/board/j3XpYVVCyO5phEuaUNbw0t/System-Architecture-Diagram?node-id=0-1&t=ZW73J667wgGRQkjN-1]

