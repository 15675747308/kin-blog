
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'element-plus/dist/index.css';
import elementPlus from "element-plus";
import {Codemirror} from "codemirror-editor-vue3";
import "codemirror-editor-vue3/dist/style.css";


const app = createApp(App).use(elementPlus).use(router).use(Codemirror).mount("#app");
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