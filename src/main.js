// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入elementUI
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/css/reset.css';

import {parseTime,resetForm,success, error,getDic} from '@/utils/amy';
import {getWebDic} from '@/utils/dic';

Vue.config.productionTip = false


// 挂载全局函数
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.success = success
Vue.prototype.error = error
Vue.prototype.getDic = getDic
Vue.prototype.getWebDic = getWebDic



Vue.use(ElementUI);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
