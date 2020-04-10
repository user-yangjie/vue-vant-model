import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'/* 重置样式 */
import fastclick from "fastclick"/* 解决300秒延迟 */
import { Lazyload } from 'vant';/* 懒加载 */

fastclick .attach (document.body)/* 解决300秒延迟 */
Vue.use(Lazyload, {
  lazyComponent: true,
loading:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2467429933,3710707406&fm=26&gp=0.jpg'
});/* 懒加载 */
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
