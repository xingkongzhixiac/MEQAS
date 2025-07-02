<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from 'element-plus';
import {useBreadcrumbStore} from "@/stores/breadcrumbStore.ts";
import {onMounted} from "vue";

const breadcrumbStore = useBreadcrumbStore()
onMounted(()=>{
  breadcrumbStore.setBreadcrumbList([])
})

const cardsData =[
  {
    index:1,
    content:"2025条,337个",
    title:"含能材料知识词条及知识点"
  },
  {
    index:2,
    content:"2025条,337个",
    title:"含能材料知识词条及知识点"
  },
  {
    index:3,
    content:"2025条,337个",
    title:"含能材料知识词条及知识点"
  },
  {
    index:4,
    content:"2025条,337个",
    title:"含能材料知识词条及知识点"
  }
]
</script>

<template>
  <div>
    <el-carousel height="auto" autoplay>
      <el-carousel-item style="height: auto" v-for="item in 3" :key="item">
        <img alt="carousel" width="100%" :src="`/banner${item}.png`">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div style="padding: 0 20%;">
    <div style="display:flex; justify-content: space-around">
      <div class="nav-item">
        <div class="icon-nav-item">
          <img alt="image" :src="`/001.svg`" style="height:70px; width: 70px;border-radius: 50%;">
        </div>
        <span class="item-title">含能材料研制知识库</span>
      </div>
      <div class="nav-item" >
        <div class="icon-nav-item">
          <img alt="image" :src="`/002.svg`" style="height: 70px; width: 70px; ">
        </div>
        <span  class="item-title">含能材料基础数据资源</span>
      </div>
      <div  class="nav-item">
        <div class="icon-nav-item">
          <img alt="image" :src="`/003.svg`" style="height: 70px; width: 70px; ">
        </div>
        <span class="item-title">含能材料知识挖掘与可视分析系统</span>
      </div>
    </div>
    <div style="display:flex; justify-content: space-around">
      <el-card v-for="(card, index) in cardsData" :key="index" class="box-card" style="width: 200px;  margin: 5px 20px; display: inline-block;">
        <div style="display: flex;justify-content: center;align-items: center;">
          <img alt="image" :src="`/em_${index + 2}.svg`" style="width: 40px; height: 40px;">
        </div>
        <div style="padding: 10px;text-align: center">
          <p>{{ card.content }}</p>
        </div>
        <div style="text-align: center">
          <span>{{ card.title }}</span>
        </div>
      </el-card>
    </div>
  </div>

</template>

<style scoped>
.nav-item{
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}
.icon-nav-item{
  margin-top: 10px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height:120px;
  border-radius: 50%;
  background-color: #3E3E3E;
}

.icon-nav-item:hover{
  background-color: #b3b2b2;
  transition: background-color 0.3s ease;
}

.item-title{
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  max-width: 200px;
  color:  #3E3E3E;
  word-wrap: normal;
}
</style>
