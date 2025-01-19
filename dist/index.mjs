var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/auth.ts
import axios from "axios";
function authenticate(_0) {
  return __async(this, arguments, function* ({
    clientId,
    clientSecret,
    redirectUri,
    code
  }) {
    const url = "https://api.parasut.com/oauth/token";
    const payload = {
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code
    };
    const response = yield axios.post(url, payload);
    return response.data;
  });
}

// src/invoices.ts
import axios2 from "axios";
function createInvoice(_0) {
  return __async(this, arguments, function* ({
    accessToken,
    companyId,
    invoiceData
  }) {
    const url = `https://api.parasut.com/v4/${companyId}/invoices`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
    const response = yield axios2.post(url, invoiceData, { headers });
    return response.data;
  });
}

// src/items.ts
import axios3 from "axios";
function getItems(_0) {
  return __async(this, arguments, function* ({
    accessToken,
    companyId
  }) {
    const url = `https://api.parasut.com/v4/${companyId}/items`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
    const response = yield axios3.get(url, { headers });
    return response.data;
  });
}
function createItem(_0) {
  return __async(this, arguments, function* ({
    accessToken,
    companyId,
    itemData
  }) {
    const url = `https://api.parasut.com/v4/${companyId}/items`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
    const response = yield axios3.post(url, itemData, { headers });
    return response.data;
  });
}

// src/customers.ts
import axios4 from "axios";
function getCustomers(_0) {
  return __async(this, arguments, function* ({
    accessToken,
    companyId
  }) {
    const url = `https://api.parasut.com/v4/${companyId}/customers`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
    const response = yield axios4.get(url, { headers });
    return response.data;
  });
}
function createCustomer(_0) {
  return __async(this, arguments, function* ({
    accessToken,
    companyId,
    customerData
  }) {
    const url = `https://api.parasut.com/v4/${companyId}/customers`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
    const response = yield axios4.post(url, customerData, { headers });
    return response.data;
  });
}

// src/updateInvoice.ts
import axios5 from "axios";
function updateInvoice(_0) {
  return __async(this, arguments, function* ({
    accessToken,
    companyId,
    invoiceId,
    invoiceData
  }) {
    const url = `https://api.parasut.com/v4/${companyId}/invoices/${invoiceId}`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };
    const response = yield axios5.put(url, invoiceData, { headers });
    return response.data;
  });
}
export {
  authenticate,
  createCustomer,
  createInvoice,
  createItem,
  getCustomers,
  getItems,
  updateInvoice
};
