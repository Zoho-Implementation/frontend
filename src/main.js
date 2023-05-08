import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import {getAuthLink} from "@/helpers/requestHelper";
import {getAccessToken} from "@/api/auth";
import {store} from "@/store";

const app = createApp(App);

app.use(router);
app.use(store);

router.beforeEach((to, from, next) => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (!localStorage.getItem('access_token') && code === null) {
        window.location.href = getAuthLink();
    } else {
        if (code) {
            const token = getAccessToken(code);
            if (token) {
                localStorage.setItem('access_token', token);
            }
        }
    }
    next();
});

app.mount('#app');
