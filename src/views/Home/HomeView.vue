<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from 'element-plus';
import {useBreadcrumbStore} from "@/stores/breadcrumbStore.ts";
import {onMounted} from "vue";

const breadcrumbStore = useBreadcrumbStore()
onMounted(()=>{
  breadcrumbStore.setBreadcrumbList([])
})

</script>

<template>
  <div>
    <el-carousel height="auto" autoplay indicator-position="outside">
      <el-carousel-item style="height: auto" v-for="item in 3" :key="item">
        <img alt="carousel" width="100%" :src="`/banner${item}.png`">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div style="display:flex; justify-content: space-around">
    <div style="display:flex; flex-direction: column; align-items: center; margin: 20px;border-radius: 50%">
      <img alt="image" :src="`/001.png`" style="height: 100px; width: 100px;" >
      <span>含能材料研制知识库</span>
    </div>
    <div style="border-radius: 50%">
      <img alt="image" :src="`/002.png`" style="height: 100px; width: 100px; ">
      <span>含能材料基础数据资源</span>
    </div>
    <div style="border-radius: 50%">
      <img alt="image" :src="`/003.png`" style="height: 100px; width: 100px; ">
      <span>含能材料知识挖掘与可视分析系统</span>
    </div>
  </div>
</template>

<style scoped>

</style>
