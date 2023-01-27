
const authLogin = async (info) =>{
    const response = await fetch("http://localhost:5005/api/auth/login", info)
    return await response.json()
}


export {authLogin}