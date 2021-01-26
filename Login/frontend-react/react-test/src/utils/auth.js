const STORAGE_KEY = 'react-test'
const isLogged = () => !!localStorage.getItem(STORAGE_KEY)
const login = token => localStorage.setItem(STORAGE_KEY, token)
const logout = () => localStorage.removeItem(STORAGE_KEY)
export {login, logout, isLogged}