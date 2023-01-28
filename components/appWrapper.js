import { verifyService } from "@/services/auth.services";
import { useRouter } from "next/router";

const { createContext, useState, useContext } = require("react");


const appContext = createContext({})

export default function AppWrapper({children}){

    const router = useRouter()
    const [isOwner, setIsOwner] = useState(false)
    
    const authenticateUser = async () =>{
        try{
            await verifyService()
            setIsOwner(true)
        }
        catch(err){
            console.log(err)
            setIsOwner(false)
            router.push("/")
        }
    }

    const passedContext = {authenticateUser, isOwner}

    return <appContext.Provider value={passedContext}>
        {children}
    </appContext.Provider>

}

export function useAppWrapper(){
    const context = useContext(appContext)
    return context
}
