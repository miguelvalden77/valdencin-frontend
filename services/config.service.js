const { default: axios } = require("axios");

const service = axios.create({baseURL: "http://localhost:5005/api/auth/"})

service.interceptors.request.use((config)=>{

    const token = localStorage.getItem("authToken")

    if(token){
        config.headers = {
            authorization: `Bearer ${token}`
        }
    }

    return config

})

export default service