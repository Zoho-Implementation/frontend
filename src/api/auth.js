import {GET_ACCESS_TOKEN} from "@/helpers/api_url";
import axios from 'axios';

export const getAccessToken = (code) => {
    const formData = new FormData();
    formData.append('code', code);
    return axios.post(
        process.env.VUE_APP_DOMAIN_API + GET_ACCESS_TOKEN,
        formData,
        )
        .then(response => {
            if (response.data.data && response.data.data[0][0] === "access_code") {
                const token = response.data.data[0][1];
                localStorage.setItem('access_token', token);
                return token;
            }
        })
        .catch(error => {
            console.log(error);
        });
};
