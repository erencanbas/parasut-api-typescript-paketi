import axios from "axios";

export interface AuthParams {
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    code: string
}

export async function authenticate({
    clientId,
    clientSecret,
    redirectUri,
    code,
}: AuthParams) {
    const url = "https://api.parasut.com/oauth/token";
    const payload = {
        grant_type: "authorization_code",
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code, 
    }

    const response = await axios.post(url,payload);
    return response.data;
}