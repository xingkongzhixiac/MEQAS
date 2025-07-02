<template>
<div class="all">
<!--  <div class="top">-->
    <top-panel/>
    <div class="main-content">
      <div v-if="!breadcrumbStore.breadcrumbList" style="padding: 10px"><el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in breadcrumbStore.breadcrumbList" :key="item['name']" :to="{path: item['path']}" >{{item['name']}}</el-breadcrumb-item>
      </el-breadcrumb></div>
      <!--  </div>-->
      <div class="main"> <router-view /></div>

    </div>
  <div class="bottom">
    <bottom-panel/>
  </div>
</div>
</template>

<script setup lang="ts">


import TopPanel from "@/Layout/component/TopPanel.vue";
import BottomPanel from "@/Layout/component/BottomPanel.vue";
import {useBreadcrumbStore} from "@/stores/breadcrumbStore.ts";
const breadcrumbStore = useBreadcrumbStore()

</script>

<style scoped>
.all{
  height:100vh;
  width:100%;
  display: flex;
  flex-direction: column;
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
.main{
  height: 100%;
}
.main-content{
  overflow-y: auto;
}
</style>
