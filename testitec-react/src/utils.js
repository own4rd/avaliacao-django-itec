export const isUserLoggedIn = () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if(refreshToken != null) {
        return true
    }  

    return false
}