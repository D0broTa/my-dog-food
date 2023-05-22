import { getItem } from "./localStorage";

const onResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
const config = {
    url: 'https://fakestoreapi.com',
    token: getItem('JWT'),
};

class Api {
    constructor({url, token}) {
        this.url = url;
        this.token = `Bearer ${token}`;
    }

    getAllProducts() {                                              //получаем все продукты
        return fetch(`${this.url}/products`, {
            headers: {
                Authorization: this.token,
                'Content-Type': 'application/json'
            },
        })
        .then(onResponse);
    };
    getAllUsers() {                                                 //получаем имеющихся пользователей
        return fetch(`${this.url}/users`, {
            headers: {
                Authorization: this.token,
                'Content-Type': 'application/json'
            },
        })
        .then(onResponse);
    };
    

    getUserInfo() {
        return fetch(`${this.url}/users/`, {
          headers: {
            Authorization: this.token,
          },
        }).then(onResponse);
      }
}

const api = new Api(config);

export default api;