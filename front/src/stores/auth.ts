import {defineStore} from "pinia";

interface Auth {
  connected: Boolean,
  token: string
}

export const useAuthStore = defineStore('auth', {
  state: ():Auth => {
    return {
      connected: false,
      token: ''
    }
  }
})
