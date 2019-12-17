import Vue from 'vue'
import APP from './index.vue'
import "./markdown.css"
import "highlight.js/styles/dark.css"

new Vue({
  render: (h) => h(APP)
}).$mount('#root');
