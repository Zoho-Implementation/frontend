import axios from 'axios';
import {headers} from "@/helpers/requestHelper";
import {CREATE_ACCOUNT, GET_ALL_ACCOUNTS} from "@/helpers/api_url";

export const loadAllAccounts = async () => {
    return await axios({
        method: 'get',
        url:  process.env.VUE_APP_DOMAIN_API + GET_ALL_ACCOUNTS,
        headers: headers(),
    })
        .then(response => {
            if (response.data.data[0]) {
                return {
                    accounts: response.data.data,
                    token: response.data.token
                };
            }
        })
        .catch(error => {
            console.log(error);
        });

};

export const createAccount = async (account) => {
    return await axios.post(process.env.VUE_APP_DOMAIN_API + CREATE_ACCOUNT, account, {
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
