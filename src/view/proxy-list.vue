<template>
  <div class="hello">
    <el-row style="margin-bottom:10px">
      <el-button type="primary" icon="el-icon-edit"
      size="medium"
      @click="$router.push('proxydetail')"
      >{{$t('m.ADD_PROXY_BTN')}}</el-button>
    </el-row>

    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="代理名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="微服务名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="微服务版本">
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
         date: '2016-05-02',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1518 弄'
       }, {
         date: '2016-05-04',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1517 弄'
       }, {
         date: '2016-05-01',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1519 弄'
       }, {
         date: '2016-05-03',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1516 弄'
       }]

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
