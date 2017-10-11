import Vue from "vue";
import {
  Button,
  Message,
  Form,
  FormItem,
  Input,
  Tabs,
  TabPane
} from "element-ui";
import App from "./App";
import router from "./router";
import "./style/main.css";

const UIComponents = [Button, Form, FormItem, Input, Tabs, TabPane];
for (let i = 0, len = UIComponents.length; i < len; i++) {
  Vue.component(UIComponents[i].name, UIComponents[i]);
}
Vue.prototype.$message = Message;

const app = new Vue({
  router,
  ...App
});

app.$mount("#app");
