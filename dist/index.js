"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  authenticate: () => authenticate,
  createCustomer: () => createCustomer,
  createInvoice: () => createInvoice,
  createItem: () => createItem,
  getCustomers: () => getCustomers,
  getItems: () => getItems,
  updateInvoice: () => updateInvoice
});
module.exports = __toCommonJS(index_exports);

// src/auth.ts
var import_axios = __toESM(require("axios"));
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
    const response = yield import_axios.default.post(url, payload);
    return response.data;
  });
}

// src/invoices.ts
var import_axios2 = __toESM(require("axios"));
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
    const response = yield import_axios2.default.post(url, invoiceData, { headers });
    return response.data;
  });
}

// src/items.ts
var import_axios3 = __toESM(require("axios"));
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
    const response = yield import_axios3.default.get(url, { headers });
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
    const response = yield import_axios3.default.post(url, itemData, { headers });
    return response.data;
  });
}

// src/customers.ts
var import_axios4 = __toESM(require("axios"));
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
    const response = yield import_axios4.default.get(url, { headers });
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
    const response = yield import_axios4.default.post(url, customerData, { headers });
    return response.data;
  });
}

// src/updateInvoice.ts
var import_axios5 = __toESM(require("axios"));
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
    const response = yield import_axios5.default.put(url, invoiceData, { headers });
    return response.data;
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authenticate,
  createCustomer,
  createInvoice,
  createItem,
  getCustomers,
  getItems,
  updateInvoice
});
