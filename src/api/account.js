import axios from 'axios';
import {headers} from "@/helpers/requestHelper";
import {GET_ALL_ACCOUNTS} from "@/helpers/api_url";

export const loadAllAccounts = async () => {
    return await axios({
        method: 'get',
        url:  process.env.VUE_APP_DOMAIN_API + GET_ALL_ACCOUNTS,
        headers: headers(),
    })
        .then(response => {
            if (response.data.data[0]) {
                return response.data.data;
            }
        })
        .catch(error => {
            console.log(error);
        });

};
