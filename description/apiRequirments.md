# API Requirements
## General eCommerce Example:
### 1. Endpoint: /products
#### Method: GET
#### Description: Fetch all available products from Sanity to display on the marketplace.
#### Response Example:
[
  {
    "id": 1,
    "name": "Product A",
    "price": 100,
    "tags": ["electronics", "gadgets"],
    "image": "https://example.com/images/product-a.jpg",
    "width": 500,
    "height": 500,
    "rating": 4.5,
    "stockQuantity": 50
  },
  {
    "id": 2,
    "name": "Product B",
    "price": 150,
    "tags": ["home", "appliances"],
    "image": "https://example.com/images/product-b.jpg",
    "width": 600,
    "height": 400,
    "rating": 4.0,
    "stockQuantity": 30
  }
]

### 2. Endpoint: /products/{id}
#### Method: GET
#### Description: Fetch detailed information for a specific product based on its ID.
#### Response Example:
{
  "id": 1,
  "name": "Product A",
  "price": 100,
  "tags": ["electronics", "gadgets"],
  "image": "https://example.com/images/product-a.jpg",
  "width": 500,
  "height": 500,
  "rating": 4.5,
  "stockQuantity": 50,
  "description": "A high-quality electronic gadget."
}

### 3. Endpoint: /customers
#### Method: POST
#### Description: Create a new customer record in Sanity.
#### Payload Example:
{
  "customerId": 1,
  "firstName": "John",
  "lastName": "Doe",
  "companyName": "Doe Enterprises",
  "country": "USA",
  "address": "123 Main St",
  "city": "New York",
  "province": "NY",
  "zipCode": 10001,
  "phone": 1234567890,
  "email": "john.doe@example.com",
  "additionalInformation": "Preferred contact via email."
}

{
  "message": "Customer record created successfully.",
  "customerId": 1
}

### 4. Endpoint: /orders
#### Method: POST
#### Description: Create a new order in Sanity.
#### Payload Example:
{
  "customerId": 1,
  "products": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 2,
      "quantity": 1
    }
  ],
  "paymentStatus": "Paid"
}

{
  "orderId": 12345,
  "status": "Order Created",
  "message": "Your order has been successfully placed."
}

### 5. Endpoint: /shipment
#### Method: GET
#### Description: Track order status via third-party API.
#### Response Example:
{
  "shipmentId": "SHIP123456",
  "orderId": 12345,
  "status": "In Transit",
  "expectedDeliveryDate": "2023-10-15"
}
