import Vue from 'vue'
import {
  Button,
  Message,
  Form,
  FormItem,
  Input,
  Tabs,
  TabPane,
  Card,
  Row,
  Col,
  Upload,
  Tooltip,
  Dialog,
  Select,
  Option,
  Popover,
  DatePicker
} from 'element-ui'
import App from './App'
import router from './router'
import './style/main.css'

const UIComponents = [
  Button,
  Form,
  FormItem,
  Input,
  Tabs,
  TabPane,
  Card,
  Row,
  Col,
  Upload,
  Tooltip,
  Dialog,
  Select,
  Option,
  Popover,
  DatePicker
]
// for (let i = 0, len = UIComponents.length; i < len; i++) {
//   Vue.component(UIComponents[i].name, UIComponents[i])
// }

for (let i = 0, len = UIComponents.length; i < len; i++) {
  Vue.use(UIComponents[i])
}
Vue.prototype.$message = Message

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
