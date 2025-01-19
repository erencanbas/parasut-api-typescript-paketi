interface AuthParams {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    code: string;
}
declare function authenticate({ clientId, clientSecret, redirectUri, code, }: AuthParams): Promise<unknown>;

interface InvoiceData {
    customer_id: number;
    items: Array<{
        description: string;
        quantity: number;
        unit_price: number;
    }>;
}
declare function createInvoice({ accessToken, companyId, invoiceData }: {
    accessToken: string;
    companyId: string;
    invoiceData: InvoiceData;
}): Promise<unknown>;

declare function getItems({ accessToken, companyId, }: {
    accessToken: string;
    companyId: string;
}): Promise<unknown>;
declare function createItem({ accessToken, companyId, itemData }: {
    accessToken: string;
    companyId: string;
    itemData: {
        name: string;
        description: string;
        price: number;
    };
}): Promise<unknown>;

declare function getCustomers({ accessToken, companyId, }: {
    accessToken: string;
    companyId: string;
}): Promise<unknown>;
declare function createCustomer({ accessToken, companyId, customerData, }: {
    accessToken: string;
    companyId: string;
    customerData: {
        name: string;
        email: string;
        phone: string;
    };
}): Promise<unknown>;

declare function updateInvoice({ accessToken, companyId, invoiceId, invoiceData, }: {
    accessToken: string;
    companyId: string;
    invoiceId: string;
    invoiceData: any;
}): Promise<unknown>;

export { authenticate, createCustomer, createInvoice, createItem, getCustomers, getItems, updateInvoice };
