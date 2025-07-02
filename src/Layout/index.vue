<template>
<div class="all">
  <div class="top">
    <top-panel/>
  </div>
    <router-view/>
  <div class="bottom">
    <bottom-panel/>
  </div>
</div>
</template>

<script setup lang="ts">




import TopPanel from "@/Layout/component/TopPanel.vue";
import BottomPanel from "@/Layout/component/BottomPanel.vue";
</script>

<style scoped>
.all{
  height:100%;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top{
  height:60px;
  width: 100%;
  background-color: rgb(62, 62, 62);
}
.bottom{
  height: 60px;
  background-color: rgb(62, 62, 62);
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 60px;
}
</style>
