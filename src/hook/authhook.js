import axios from "axios";
import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { getUserService } from "../services/auth";
import { useDispatch } from "react-redux";
import { recieveRolesResponse } from "../redux/roles/rolesActions";

export const useIsLogin = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    const handleCheckLogin = async ()=>{
        try {
            const res = await getUserService()
            setIsLogin(res.status === 200 ? true : false)
            setLoading(false)
            dispatch(recieveRolesResponse(res.data.roles))
        } catch(error) {
            localStorage.removeItem('loginToken')
            setIsLogin(false)
            setLoading(false)
        }
    }

    useEffect(() => {
        const loginToken = JSON.parse(localStorage.getItem('loginToken'))

        if (loginToken) {
            handleCheckLogin()
        } else {
            setIsLogin(false)
            setLoading(false)
        }
    }, []);

    return [loading , isLogin]
}