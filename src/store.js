import { createStore } from 'vuex'

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
        setAccessToken(state, access_token) {
            state.access_token = access_token;
        },
        setAccounts(state, accounts) {
            state.accounts = accounts;
        },
        setDeals(state, deals) {
            state.deals = deals;
        },
        setCurrentAccount(state, currentAccount) {
            state.currentAccount = currentAccount;
        },
        setCurrentDeal(state, currentAccount) {
            state.currentAccount = currentAccount;
        },
    },
    actions: {
        loadAccounts(context) {},
        loadDeals(context) {},
        createAccount(context, account) {},
        createDeal(context, deal) {}
    },
    getters: {
        getAccessToken: state => state.access_token,
        getAccounts: state => state.accounts,
        getDeals: state => state.deals,
        getCurrentAccount: state => state.currentAccount,
        getCurrentDeal: state => state.currentDeal
    }
})
