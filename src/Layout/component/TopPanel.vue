

<template>
    <el-menu
      :default-active="route.path"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#fff"
      background-color="#3E3E3E"
      text-color="#fff"
      :ellipsis="false"
      router
      @select="handleSelect"
    >
      <div style="width: 25%"></div>
      <div style="height: 100%; display: flex;justify-content: center;align-items: center;color: #ffffff;margin-right: 10px">
        <p style="font-weight: bold;">MEQAS<sup>BETA0.1</sup></p>
      </div>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {useRoute} from "vue-router";
const route = useRoute()
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>

</style>
