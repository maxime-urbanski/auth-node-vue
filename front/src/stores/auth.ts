import {defineStore} from "pinia";

interface Auth {
  connected: Boolean
}

export const useAuthStore = defineStore('auth', {
  state: ():Auth => {
    return {
      connected: false
    }
  }
})
