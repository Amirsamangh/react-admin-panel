import axios from "axios";
import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { getUserService } from "../services/auth";

export const useIsLogin = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(true)

    const handleCheckLogin = async ()=>{
        const res = await getUserService()
        try {
            setIsLogin(res.status === 200 ? true : false)
            setLoading(false)
        } catch {
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