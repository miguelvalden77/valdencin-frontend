import service from "./config.service";

const upload = (img)=>{
   return service.post("http://localhost:5005/api/uploader", img)
}

export {upload}