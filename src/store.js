import { createStore } from 'vuex'
import {loadAllAccounts} from "@/api/account";

export const store = createStore({
    state () {
        return {
            access_token: '',
            accounts: [],
            deals: [],
            currentAccount: {
                website: '',
                phone: '',
                account_name: ''
            },
            currentDeal: {
                account_id: '',
                deal_name: '',
                stage: ''
            }
        }
    },
    mutations: {
        SET_ACCESS_TOKEN(state, access_token) {
            state.access_token = access_token;
        },
        SET_ACCOUNTS(state, accounts) {
            state.accounts = accounts;
        },
        SET_DEALS(state, deals) {
            state.deals = deals;
        },
        SET_CURRENT_ACCOUNT(state, currentAccount) {
            state.currentAccount = currentAccount;
        },
        SET_CURRENT_DEAL(state, currentAccount) {
            state.currentAccount = currentAccount;
        },
    },
    actions: {
        loadAccounts({commit}) {
            loadAllAccounts().then((response) => {
                commit('SET_ACCOUNTS', response);
            });
        },
        loadDeals(context) {},
        createAccount(context, account) {},
        createDeal(context, deal) {},
        setAccessToken({commit}, access_token) {
            commit('SET_ACCESS_TOKEN', access_token);
        }
    },
    getters: {
        getAccessToken: state => state.access_token,
        getAccounts: state => state.accounts[0],
        getDeals: state => state.deals,
        getCurrentAccount: state => state.currentAccount,
        getCurrentDeal: state => state.currentDeal
    }
})
