import {defineStore} from "pinia";
import {axiosInstance} from '@/utils'

interface Auth {
    connected: Boolean,
    token: string
}

interface AuthAction {
    email: string,
    password: string
}


export const useAuthStore = defineStore('auth', {
    state: (): Auth => {
        return {
            connected: false,
            token: ''
        }
    },
    actions: {
        async auth(model: AuthAction) {
            try {
                const log = await axiosInstance.post('/login', {
                    email: model.email,
                    password: model.password
                })

                if (!log.data.token) {
                    return
                } else {
                    this.$state.token = log.data.token
                    this.$state.connected = true
                    this.$router.push({name: 'home'})
                }
            } catch (e) {
                console.error(e)
            }
        }
    }
})
