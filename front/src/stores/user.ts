import {defineStore} from "pinia"
import {computed, reactive} from "vue";
import {axiosInstance} from '@/utils'
import {useAuthStore} from "@/stores/auth";

interface UserInfo {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    isAdmin: boolean,
    userType: string
}

export const useUserStore = defineStore('user', () => {
        const user: UserInfo = reactive({
            id: '',
            firstname: '',
            lastname: '',
            email: '',
            isAdmin: false,
            userType: ''
        })

        async function $getUser(): Promise<void> {
            const authStore = useAuthStore()
            try {
                const currentUser = await axiosInstance.get(`/users/${authStore.id}`, {
                    headers: {
                        'Authorization': `Bearer ${authStore.token}`
                    }
                })
                if (currentUser) {
                    user.id = currentUser.data['_id']
                    user.firstname = currentUser.data.firstname
                    user.lastname = currentUser.data.lastname
                    user.email = currentUser.data.email
                    user.userType = currentUser.data.userType
                }
            } catch (e) {
                authStore.$reset()
                console.error(e)
            }
        }

        function $reset() {
            user.id = ''
            user.firstname = ''
            user.lastname = ''
            user.email = ''
            user.userType = ''
        }

        return {
            user,
            $getUser,
            $reset
        }
    }
)
