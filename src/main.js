import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vue3TouchEvents from "vue3-touch-events";
import './style/main';
import './assets/fonts/iconfont.css';
import {
  ConfigProvider,
  Form,
  Field,
  CellGroup,
  Button,
  NavBar,
  Popup,
  Cell,
  Tab,
  Tabs,
  Image as VanImage,
  Swipe, SwipeItem,
  Icon } from 'vant';
import { Range } from '@nutui/nutui';
  
const app = createApp(App);
app
  .use(Range)
  .use(VanImage)
  .use(Swipe)
  .use(SwipeItem)
  .use(ConfigProvider)
  .use(Tab)
  .use(Tabs)
  .use(Cell)
  .use(Form)
  .use(Icon)
  .use(Field)
  .use(Popup)
  .use(Button)
  .use(NavBar)
  .use(CellGroup);

app.use(router).use(store).use(Vue3TouchEvents).mount('#app');
