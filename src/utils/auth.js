const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
}

const onResponse = (res) => res.ok ? res.json() : (Promise.reject(`Ошибка: ${res.status}`)/* , alert('Вы ввели недопустимую комбинацию username/password. \nПовторите попытку авторизации') */)

const BASE_URL = 'https://fakestoreapi.com'

// export const signup = (data) => {                       //регистрация
//     return fetch(`${BASE_URL}/signup`, {
//         method: "POST",
//         headers, //headers: headers
//         body: JSON.stringify(data)
//     }).then(onResponse)
// };

export const signin = (data) => {                       //авторизация
    return fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers, //headers: headers
        body: JSON.stringify(data)
    }).then(onResponse)
    
};

// export const checkToken = (token) => {                  //проверка токена
//     return fetch(`${BASE_URL}/auth/login`, {
//         method: "POST",
//         headers: {
//             ...headers,
//             authorization: `${token}`
//         },
//     }).then(onResponse)
// }