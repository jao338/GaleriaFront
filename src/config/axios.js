import axios from "axios";

//  Ao especificar o header de autorização na URL base, toda rota necessitará de um token de autenticação
// const api = axios.create({
//         baseURL: 'http://localhost:8000/api/',
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },                 
// });

const api = axios.create({ baseURL: 'http://127.0.0.1:8000/api/',});

// api.defaults.withXSRFToken = true;

// api.interceptors.request.use(
// (config) => {
// config.headers.Authorization = `Bearer ${cache.get("token")}`;

// return config;
// },
// (error) => {
// return Promise.reject(error);
// }
// );

export { api };
