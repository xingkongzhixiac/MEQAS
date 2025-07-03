<template>
  <el-menu
    :default-index="route.path"
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
    <div
      style="height: 100%; display: flex;justify-content: center;align-items: center;color: #ffffff;margin-right: 10px">
      <p style="font-weight: bold;">MEQAS<sup>BETA0.1</sup></p>
    </div>

    <template v-for="item in filteredMenuList" :key="item.path">
      <el-menu-item v-if="item.name !== '退出登录'" :index="item.path">{{ item.name }}</el-menu-item>
      <el-menu-item v-else :index="item.path" @click="userLoginStore.logout">{{item.name }}</el-menu-item>
    </template>

  </el-menu>
</template>

<script lang="ts" setup>
import {ref, computed, isReactive} from 'vue'
import {useRoute} from "vue-router";
import {loginStore} from "@/stores/login/loginStore.ts";

const userLoginStore = loginStore()

const route = useRoute()
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const menuList = [
  {name: '首页', path: '/', visibleWhen: 'all'},
  {name: '管理员', path: '/', visibleWhen: 'login'},
  {name: '退出登录', path: '/', visibleWhen: 'login'},
  {name: '登录', path: '/login', visibleWhen: 'guest'},

]

const filteredMenuList = computed(() => {
  return menuList.filter(item => {
    if (item.visibleWhen === 'all') return true
    if (item.visibleWhen === 'login') return userLoginStore.isLogined
    if (item.visibleWhen === 'guest') return !userLoginStore.isLogined
    return false
  })
})
</script>

<style scoped>

</style>
