import Vue from 'vue'
import APP from './index.vue'
import "./markdown.css"

new Vue({
  render: (h) => h(APP)
}).$mount('#root');
