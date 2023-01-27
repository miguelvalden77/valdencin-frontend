import axios from "axios"
import service from "./config.service"

const authLogin = async (info) =>{
    return service.post("/login", info)
}

const verifyService = () =>{
    return service.get("/verify")
}


export {authLogin, verifyService}