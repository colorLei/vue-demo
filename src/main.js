import Vue from 'vue';
import App from './App';
import router from './router';
import VueI18n from 'vue-i18n'

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
Vue.use(VueI18n)
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Button);
Vue.use(Input);
Vue.use(Tag);

const i18n = new VueI18n({
    locale: 'en-US',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh-CN': require('./lang/zh'),   // 中文语言包
      'en-US': require('./lang/en')    // 英文语言包
    }
})

new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App),
});
