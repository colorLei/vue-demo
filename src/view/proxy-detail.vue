<template>
  <div class="detail">
    <aside class="search">
      <el-row style="margin-bottom:10px">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          size="mini"
          v-model="searchKey">
        </el-input>
      </el-row>
      <div class="proxy-list">
        <ul>
          <li>111</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>111</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li><li>111</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li><li>111</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li><li>111</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li><li>111</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
          <li>222</li>
        </ul>
        <!-- <div class="no-content">
          <span>搜索🔍结果为空，请添加该规则</span>
        </div> -->
      </div>
    </aside>
    <main>
      <component :is="view"></component>
    </main>
  </div>
</template>

<script>
import proxyrule from '@/view/proxy-rule';
import proxyinput from '@/view/proxy-input';

const PROXY_RULE="proxyrule";
const PROXY_INPUT="proxyinput";
export default {
  components: {
    proxyrule,
    proxyinput
  },
  data() {
    return {
      searchKey:"",
      view:PROXY_RULE
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
  display: flex;
  justify-content:center;
}
.search,main{
  border: 1px solid #409EFF;
  border-radius: 3px;
  box-shadow:0 0 8px 0 rgba(232,237,250,.6),
  0 2px 4px 0 rgba(232,237,250,.5)
}
.search{
  width: 240px;
  margin-right: 20px;
  padding: 10px 15px;
  min-height: 520px;
}
main{
  width: 600px;
  padding: 20px
}
.proxy-list{
  height: 500px;
  overflow-y:auto;
}
.proxy-list li{
  line-height: 22px;
  cursor: pointer;
  padding-left: 5px;
}
.no-content{
  width: 100%;
  margin-top: 100px;
  font-size: 14px;
  text-align: center;
}
</style>
