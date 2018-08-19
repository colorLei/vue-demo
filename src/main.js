import Vue from 'vue';
import App from './App';
import router from './router';

import './styles/pc-reset.css';
import {
  Table,
  TableColumn,
  Row,
  Button,
  Input,
  Tag
} from 'element-ui';

Vue.config.productionTip = false;
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Button);
Vue.use(Input);
Vue.use(Tag);
// Vue.use(Input);
// Vue.use(Input);
// Vue.use(Input);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
