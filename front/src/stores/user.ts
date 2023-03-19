import { defineStore } from "pinia"

interface UserInfo {
    firstname: string,
    lastname: string,
    email: string,
    isAdmin: boolean
}

export const userStore = defineStore('user.store', {
    state: (): UserInfo => {
        return {
            firstname: '',
            lastname: '',
            email: '',
            isAdmin: false
        }
    },
    getters: {
        fullName : (state): string => {
            return `${state.firstname} - ${state.lastname}`
        }
    }
})