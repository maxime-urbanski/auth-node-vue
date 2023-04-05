import {defineStore} from "pinia";
import {axiosInstance} from '@/utils'

interface Auth {
    connected: Boolean,
    token: String,
    id: String
}

interface AuthAction {
    email: string,
    password: string
}


export const useAuthStore = defineStore('auth', {
    state: (): Auth => {
        return {
            connected: false,
            token: '',
            id: ''
        }
    },
    actions: {
        async auth(model: AuthAction): Promise<void> {
            try {
                const log = await axiosInstance.post('/login', {
                    email: model.email,
                    password: model.password
                })

                if (!log.data.token) return

                if (log) {
                    this.$state.token = log.data.token
                    this.$state.connected = true
                    this.$state.id = log.data.login['_id']
                    this.$router.push({name: 'home'})
                }
            } catch (e) {
                console.error(e)
            }
        }
    }
})
