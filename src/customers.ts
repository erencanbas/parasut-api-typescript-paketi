import axios from "axios";

export async function getCustomers({
    accessToken,
    companyId,
}: {
    accessToken: string;
    companyId: string;
}) {
    const url = `https://api.parasut.com/v4/${companyId}/customers`;
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    };

    const response = await axios.get(url, { headers });
    return response.data;

}

export async function createCustomer({
    accessToken,
    companyId,
    customerData,
}: {
    accessToken: string,
    companyId: string,
    customerData: {
        name: string;
        email: string;
        phone: string;
    };
}) {
    const url = `https://api.parasut.com/v4/${companyId}/customers`;
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    };

    const response = await axios.post(url, customerData, { headers });
    return response.data;
}