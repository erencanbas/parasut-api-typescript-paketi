import axios from "axios";


export async function updateInvoice({
  accessToken,
  companyId,
  invoiceId,
  invoiceData,
}: {
  accessToken: string;
  companyId: string;
  invoiceId: string;
  invoiceData: any;
}) {
  const url = `https://api.parasut.com/v4/${companyId}/invoices/${invoiceId}`;
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const response = await axios.put(url, invoiceData, { headers });
  return response.data; 
}
