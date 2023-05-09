import axios from 'axios';
import {CREATE_DEAL, GET_DEALS} from "@/helpers/api_url";
import {headers} from "@/helpers/requestHelper";

export const loadAllDeals = async () => {
    return await axios({
        method: 'get',
        url:  process.env.VUE_APP_DOMAIN_API + GET_DEALS,
        headers: headers(),
    })
        .then(response => {
            if (response.data.data[0]) {
                return {
                    deals: response.data.data,
                    token: response.data.token
                };
            }
        })
        .catch(error => {
            console.log(error);
        });

};

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
