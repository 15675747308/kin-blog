
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'element-plus/dist/index.css';
import elementPlus from "element-plus";


const app = createApp(App).use(elementPlus).use(router).mount("#app");
app.$data.IsHideNavigation = false;
app.$data.HideNavigation = [
    'login'
];

router.beforeEach((to, form) =>{
//console.log("路由前置hook");

app.$data.IsHideNavigation = app.$data.HideNavigation.indexOf(to.name) !== -1;
/*
console.log(to)
console.log(form)*/
})