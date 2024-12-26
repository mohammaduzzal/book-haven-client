import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

 export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials : true,
})


const useAxiosSecure = () =>{
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
  useEffect(()=>{
    
    axiosSecure.interceptors.response.use(res=>{
        return res
    }, async error => {
        console.log('error is caught by our very own interceptor', err.response);
        if(error.response.status === 401 || error.response.status === 403){
            // logout
            logOut()
            // navigate to login
            navigate('/auth/signin')
            
        }
    })
  },[logOut,navigate])
  return axiosSecure

}
export default useAxiosSecure;