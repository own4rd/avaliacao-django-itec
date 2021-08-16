import axiosInstance from '../services';

const endpoint = 'promotions';


export const PromotionApi = {
    async list() {
        return await axiosInstance.get(`/${endpoint}/`);
    },
    async create(name, slug, category, description, site, price) {
        return await axiosInstance.post(`/${endpoint}/`, {
            name: name,
            slug: slug,
            author: 1,
            category_id: category,
            description: description,
            site: site,
            price: price
        });
    },
    async myPromotionsList(token) {
        return await axiosInstance.get(`/${endpoint}/my-promotions/`, {
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        });
    },
    async listCategories() {
        return await axiosInstance.get(`/${endpoint}/categories`);
    },


}