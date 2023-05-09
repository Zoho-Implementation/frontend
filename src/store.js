import { createStore } from 'vuex'
import {createAccount, loadAllAccounts} from "@/api/account";
import {createDeal} from "@/api/deal";

export const store = createStore({
    state () {
        return {
            access_token: '',
            accounts: [],
            deals: [],
            accountCreatedSuccess: false,
            dealsCreatedSuccess: false,
        }
    },
    mutations: {
        SET_ACCESS_TOKEN(state, access_token) {
            state.access_token = access_token;
            localStorage.setItem('access_token', access_token);
        },
        SET_ACCOUNTS(state, accounts) {
            state.accounts = accounts;
        },
        SET_DEALS(state, deals) {
            state.deals = deals;
        },
        SET_ACCOUNT_CREATE_STATUS(state, status) {
            state.accountCreatedSuccess = status;
        },
        SET_DEAL_CREATE_STATUS(state, status) {
            state.dealsCreatedSuccess = status;
        },
    },
    actions: {
        loadAccounts({commit}) {
            loadAllAccounts().then((response) => {
                commit('SET_ACCOUNTS', response.accounts);
                commit('SET_ACCESS_TOKEN', response.token)
            });
        },
        loadDeals({commit}) {

        },
        createAccount({commit}, account) {
            createAccount(account).then(response => {
                commit('SET_ACCESS_TOKEN', response.token);
                commit('SET_ACCOUNT_CREATE_STATUS', true);
            })
        },
        createDeal({commit}, deal) {
            createDeal(deal).then(response => {
                console.log(response)
                commit('SET_ACCESS_TOKEN', response.token);
                commit('SET_DEAL_CREATE_STATUS', true);
            })
        },
        setAccessToken({commit}, access_token) {
            commit('SET_ACCESS_TOKEN', access_token);
        },
        hideAccountSuccessMessage({commit}) {
            commit('SET_ACCOUNT_CREATE_STATUS', false);
        },
        hideDealSuccessMessage({commit}) {
            commit('SET_DEAL_CREATE_STATUS', false);
        }
    },
    getters: {
        getAccounts: state => state.accounts[0],
        getDeals: state => state.deals,
        getAccountSuccessStatus: state => state.accountCreatedSuccess,
        getDealSuccessStatus: state => state.dealsCreatedSuccess
    }
})
