import axiosInstance from '../services';

const endpoint = 'token';
const endpoint_user = 'user'


export const UserApi = {
    async login(email, password) {
        return await axiosInstance.post(`/${endpoint}/`, {
				email: email,
				password: password,
        });
    },
    async logout(refresh_token) {
      console.log(refresh_token)
        return await axiosInstance.post(`/${endpoint_user}/logout/blacklist/`, {
          refresh_token: refresh_token,
        });
    },
}