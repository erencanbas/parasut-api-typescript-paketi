import axios from "axios";

export interface InvoiceData {
    customer_id: number,
    items: Array<{ description: string; quantity:number; unit_price: number }>;
}

export async function createInvoice({
    accessToken,
    companyId,
    invoiceData
}: {
    accessToken: string,
    companyId: string,
    invoiceData: InvoiceData;
}) {
    const url = `https://api.parasut.com/v4/${companyId}/invoices`;
    const headers = {
        Authorization:  `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    };

    const response = await axios.post(url, invoiceData, {headers});
    return response.data;
}