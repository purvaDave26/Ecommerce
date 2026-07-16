import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoutes=({children,roles})=>
{
    const [isLogin, setisLogin] = useState(false);
    const [isLoading, setisLoading] = useState(true);


    useEffect(()=>
    {
        const token=localStorage.getItem("tokan")
        const role=localStorage.getItem("role")
        if(token)
        {
            if(role && roles.includes(role))
            {
                setisLogin(true)
            }
        }
        else
        {
            setisLoading(false)
        }
        setisLoading(false)
    },[])

    if(isLoading)
    {
        return (
           <div className="flex h-screen items-center justify-center bg-slate-50">
                <div className="text-lg font-medium text-slate-600 animate-pulse">Loading authorization...</div>
            </div>
        )
    }
    if(!isLogin)
    {
        return <Navigate to="/"/>
    }
    return children
}
export default ProtectedRoutes