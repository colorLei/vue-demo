import Vue from 'vue';
import App from './App';
import router from './router';

import './styles/pc-reset.css';
import {
  Table,
  TableColumn,
  Row,
  Button
} from 'element-ui';

Vue.config.productionTip = false;
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
