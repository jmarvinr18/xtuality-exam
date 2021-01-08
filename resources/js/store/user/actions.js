
import user from '../../api/user'
import { router } from '../../router-files/index';
export async function register (context, userObject) {
    const response = await user.register(userObject)
    if(response.status === 200) {
        context.commit('setUser', response.data)
        router.push('/dashboard')
    }
}
export async function login (context, userObject) {
    const response = await user.login(userObject)
    if(response.status === 200) {
        context.commit('setUser', response.data)
        router.push('/dashboard')
    }
}

export async function logout (context, userObject) {
    const response = await user.logout()
    if(response.status === 200) {
        context.commit('setUser', response.data)
        router.push('/')
    }
}