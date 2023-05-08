import {GET_CODE} from "@/helpers/api_url";

export const getAuthLink = () => {
    return process.env.VUE_APP_ACCOUNTS_ZOHO_DOMAIN +
        GET_CODE +
        `?scope=${process.env.VUE_APP_SCOPES}` +
        `&client_id=${process.env.VUE_APP_CLIENT_ID}` +
        `&response_type=code` +
        `&access_type=offline` +
        `&redirect_uri=${process.env.VUE_APP_DOMAIN}`;
};

export const headers = () => {
    const token = localStorage.getItem('access_token');
    return {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
};
