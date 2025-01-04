import { createContext, useState } from "react";

export const AdminContext = createContext({
    showSidebar: false,
    setShoeSidebar: ()=>{}
});


const AdminContextContainer = ({children})=>{
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <AdminContext.Provider value={{
            showSidebar,
            setShowSidebar
        }}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextContainer;