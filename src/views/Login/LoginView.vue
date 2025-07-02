<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {ElForm, ElMessage} from 'element-plus'
import router from "@/router";

const loginForm = ref({
  username: '',
  password: ''
})
const rules = ref({
  username: [
    {required: true, message: '请输入邮箱', trigger: 'blur'},
    {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur'}
  ]
})
const loginFormRef = ref<InstanceType<typeof ElForm> | null>(null)

const loading = ref(false)
const isRemember = ref(false)

onMounted(()=>{
  const rememberData = localStorage.getItem('rememberPassword')
  if (rememberData) {
    const {username, password} = JSON.parse(rememberData)
    loginForm.value.username = username
    loginForm.value.password = password
    isRemember.value = true
  }
})

const handLogin = () => {
  if (!loginFormRef.value) return
  loginFormRef.value.validate((valid)=>{
    if (valid){
      /*
      实际开发中的请求
       */
      // 测试
      if (loginForm.value.username === 'test@test.com' && loginForm.value.password === '1234567') {
        ElMessage.success('登录成功！')
        router.push('/')
      } else {
        ElMessage.error('用户名或密码错误')
      }

      // 记住密码逻辑
      if (isRemember.value) {
        localStorage.setItem('rememberPassword', JSON.stringify(loginForm.value))
      }
    }
  })
}
</script>

<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="title">用户登录</h2>
      <el-form
        :label-position="'left'"
        label-width="auto"
        :model="loginForm"
        ref="loginFormRef"
        :rule="rules"
      >
        <el-form-item label="邮箱" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入邮箱" size="large"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"
                    show-password size="large"/>
        </el-form-item>
        <div class="tip" style="margin-left: 40px;">
          <el-checkbox v-model="isRemember">记住密码</el-checkbox>
        </div>
        <el-form-item style="margin-left: 40px;">
          <el-button type="primary" @click="handLogin" :loading="loading" style="width:100%;">登录</el-button>
          </el-form-item>
      </el-form>
      <div class="text-info">浏览测试账号：test@test.com，密码：123456
      <br/>
      管理账号请联系管理员新增！
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100%;
  background-color: #f5f5f5;
}

.login-card {
  width: 450px;
  height: 400px;
  padding: 24px;

  .title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 40px;
  }
}
.text-info{
  font-size: 16px;
  background-color: #d6eef6;
  padding: 10px;
}
</style>
