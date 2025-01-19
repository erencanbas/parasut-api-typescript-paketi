# Parasut API TypeScript Wrapper

This is a TypeScript wrapper for the Parasut API, designed to help developers integrate Parasut functionality into their projects easily. The package allows you to interact with various Parasut endpoints, such as authentication, customers, invoices, items, and more.

## Features

- **Authentication**: Easily authenticate with the Parasut API using your credentials.
- **Customers**: Fetch customer data and create new customer.
- **Invoices**: Create and retrieve invoices, update their details.
- **Items**: Manage items in your Parasut account.
- **Update Invoice**: Update existing invoices with new data.
  
## Installation

You can install this package via npm or yarn.

### Using npm

```bash
npm install parasut-api
```

### Using yarn

```bash
yarn add parasut-api
```


## Usage
### Basic Example
#### 1. Authentication
  To authenticate with the Parasut API, you can use the following code:

```bash
import { authenticate } from 'parasut-api';

const credentials = {
  username: 'your-username',
  password: 'your-password',
};

const token = await authenticate(credentials);
console.log(token);
```
#### 2. Fetch Customers
To fetch a list of customers from the Parasut API:

```bash
import { getCustomers } from 'parasut-api';

const customers = await getCustomers();
console.log(customers);

```

### 3. Create an Customer
To create a new customer:

```bash
import { createCustomer } from 'parasut-api';

const newCustomer = await createCustomer({
  name: 'New Customer',
  email: 'customer@example.com',
  phone: '1234567890',
  address: 'Customer Address',
  city: 'City Name',
  country: 'Country Name',
});
console.log(newCustomer);
```

#### 4. Create an Invoice
To create a new invoice:

```bash
import { createInvoice } from 'parasut-api';

const invoice = await createInvoice({
  customer_id: 'customer-id',
  items: [
    {
      item_id: 'item-id',
      quantity: 1,
      price: 100,
    },
  ],
});
console.log(invoice);
```

#### 5. Update an Invoice
To update an existing invoice:

```bash
import { updateInvoice } from 'parasut-api';

const updatedInvoice = await updateInvoice('invoice-id', {
  status: 'paid',
});
console.log(updatedInvoice);
```

## API Endpoints
This package supports the following API endpoints:

```bash
Authentication: POST /auth
Customers: GET /customers, POST /customers
Invoices: POST /invoices, GET /invoices, PUT /invoices/{id}
Items: GET /items, POST /items
Update Invoice: PUT /invoices/{id}
```

## License
This package is open-source and available under the MIT License.
