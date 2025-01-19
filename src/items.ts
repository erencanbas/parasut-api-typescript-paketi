import axios from "axios";


export async function getItems({
    accessToken,
    companyId,
}: {
    accessToken: string;
    companyId: string;
}) {
    const url = `https://api.parasut.com/v4/${companyId}/items`;
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    };

    const response = await axios.get(url, { headers });
    return response.data;
}

export async function createItem({
    accessToken,
    companyId,
    itemData
}: {
    accessToken: string;
    companyId: string;
    itemData: {
        name: string;
        description: string;
        price: number;
    };
}) {
    const url = `https://api.parasut.com/v4/${companyId}/items`;
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    };
    const response = await axios.post(url, itemData, {headers});
    return response.data;
}