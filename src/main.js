import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/main';
import './assets/fonts/iconfont.css';
import {
  ConfigProvider,
  DatetimePicker,
  Uploader,
  Picker,
  PullRefresh,
  Form,
  RadioGroup,
  Radio,
  Field,
  CellGroup,
  Button,
  NavBar,
  Sidebar,
  SidebarItem,
  Grid,
  Popup,
  GridItem,
  Divider,
  Cell,
  Tab,
  Tabs,
  SwipeCell,
  Icon } from 'vant';
const app = createApp(App);
app
  .use(ConfigProvider)
  .use(DatetimePicker)
  .use(RadioGroup)
  .use(Radio)
  .use(Uploader)
  .use(PullRefresh)
  .use(Tab)
  .use(Tabs)
  .use(Picker)
  .use(Divider)
  .use(SwipeCell)
  .use(Cell)
  .use(Form)
  .use(Icon)
  .use(Field)
  .use(Popup)
  .use(Button)
  .use(Grid)
  .use(GridItem)
  .use(NavBar)
  .use(Sidebar)
  .use(SidebarItem)
  .use(CellGroup);

app.use(router).use(store).mount('#app');
