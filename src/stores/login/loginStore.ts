
import { defineStore } from 'pinia'

export const loginStore = defineStore('login', {
  state: () => ({
    username: '',
    isLogined: false
  }),
  actions: {
    login(username: string) {
      this.username = username
      this.isLogined = true
    },
    logout() {
      this.username = ''
      this.isLogined = false
    }
  },
  persist: true
})

