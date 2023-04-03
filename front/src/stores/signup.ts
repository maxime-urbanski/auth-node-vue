import {defineStore} from "pinia";
import {axiosInstance} from '@/utils'
import {useAuthStore} from "@/stores/auth";

interface SignUpAction {
    firstname: string,
    lastname: string,
    email: string,
    password: string,

}

export const useSignUpStore = defineStore('signup', {
    actions: {
        async signup(model: SignUpAction) {
            const {firstname, lastname, email, password} = model
            const authStore = useAuthStore()
            try {
                const signUp = await axiosInstance.post('/users', {
                    firstname,
                    lastname,
                    email,
                    password
                })

                if (signUp) {
                    await authStore.auth({
                        email,
                        password
                    })
                }
            } catch (e) {
                console.error(e)
            }
        }
    }
})