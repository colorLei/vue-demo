<template>
  <div class="hello">
    <div class="btn-group">
      <el-button type="primary" size="small">提交</el-button>
      <el-button type="primary" size="small">取消</el-button>
    </div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 20, maxRows: 21}"
      placeholder="请填写代理规则"
      resize="none"
      v-model="jsonKey">
    </el-input>

  </div>
</template>

<script>
export default {
  props:{
    header:{
      type:String,
      default:'this is Header'
    }
  },
  data() {
    return {
      jsonKey:''
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-group{
  display: flex;
  justify-content:flex-end;
  margin-bottom: 15px;
}
</style>
