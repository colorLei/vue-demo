<template>
  <div class="info">
    <el-tag size="medium">{{this.type}}</el-tag>
    <span>{{this.content}}</span>
  </div>
</template>

<script>
export default {
  props:{
    type:{
      type:String,
      default:'类型'
    },
    content:{
      type:String,
      default:'本地/Mock'
    }
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding: 3px;
  width: fit-content;
  display: inline-block;
  margin-right: 15px;
}
</style>
