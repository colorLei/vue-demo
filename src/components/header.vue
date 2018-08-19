<template>
  <div class="hello">
    <header>
      {{this.header}}
    </header>
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  height: 60px;
  width: 100%;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  line-height: 60px;
  font-weight: bold;
  font-size: 17px;
}
</style>
