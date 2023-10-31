import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://car-magician-server-site.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('axiossecure error', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                logout()
                    .then(() => {
                        navigate("/login")

                    })
                    .catch(error => console.log(error))
            }
        })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;