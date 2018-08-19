<template>
  <div class="rule">
    <proxy-info/>
    <proxy-info type="代理IP:PROT" content="127.0.0.1"/>
    <p>转发规则</p>
    <pre>
      <code>
        new Vue({
          el: '#app',
          render: h => h(App)
        });
      </code>
    </pre>
  </div>
</template>

<script>
import proxyInfo from '../components/proxy-info.vue'
export default {
  props:{
    header:{
      type:String,
      default:'this is Header'
    }
  },
  components:{
    proxyInfo
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  margin: 20px 0 5px;
  background-color: #409EFF;
  color: #fff;
  line-height: 30px;
  border-radius: 5px;
  width: 100px;
  text-align: center;
  font-size: 17px;
}
code{
  line-height: 1.5;
  font-family: Menlo,Monaco,Consolas,Courier,monospace;
  font-size: 12px;
  margin-bottom: 25px;
  -webkit-font-smoothing: auto;
  color: #000;
}
pre{
    padding: 10px 10px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    min-height: 400px;
}
</style>
