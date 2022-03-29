/**
 * @Author: vickiWu
 * @Date: 2022-03-29 10:26:09
 * @LastEditTime: 2022-03-29 10:30:06
 * @LastEditors: vickiWu
 * @Description: 网站入口文件
 * @FilePath: /d5c-code/examples/main.js
 */
import Vue from "vue";
import App from "../examples/App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
