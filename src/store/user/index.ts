import {defineStore} from "pinia";
import userService from "../../services/userService";
import client from "../../client/index";
import {UserI} from "../../services/interfaces";

interface UserStateI {
    user: UserI
}

export const useUserStore = defineStore('user', {
    state: () :UserStateI => ({
        user: null,
    }),
    getters: {
        getUser: (state) :UserI => state.user,
        isLogged: (state) :boolean => !!state.user,
        getInitials: (state :UserStateI) :string => state.user?.name.split(' ')
                                                        .map(word => word[0])
                                                        .filter((word, index) => index < 2)
                                                        .join('')
                                                        .toUpperCase(),
    },
    actions: {
        async login(email :string, password :string): Promise<void> {
            const {
                data: {
                    access_token: token
                }
            } = await userService.post.authenticate(email, password)
            await this.loginToken(token)
        },
        async loginToken(token :string) {
            this.setAuthToken(token);
            const {
                data: user
            } = await userService.get.authUser()
            this.user = user
        },
        setAuthToken(token :string) {
            client.defaults.headers.common['Authorization'] = "Bearer " + token;
            localStorage.setItem("authorization", token);
        },

    },
})