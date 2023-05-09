import axios from 'axios';
import {CREATE_DEAL} from "@/helpers/api_url";
import {headers} from "@/helpers/requestHelper";

export const createDeal = async (deal) => {
    return await axios.post(process.env.VUE_APP_DOMAIN_API + CREATE_DEAL, deal, {
        headers: headers()
    }).then(response => {
        if (response.data.data) {
            return {
                status: response.data.data.status,
                token: response.data.token
            }

        }
    })
        .catch(error => {
            console.log(error.response.data);
        });
}
