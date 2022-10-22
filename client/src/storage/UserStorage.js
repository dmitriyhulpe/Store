import { makeAutoObservable } from 'mobx'

export default class UserStorage {
    constructor() {
        this.auth = false
        this.user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this.auth = bool
    }

    setUser(user) {
        this.user = user
    }

    get isAuth() {
        return this.auth
    }

    get isUser() {
        return this.user
    }
}