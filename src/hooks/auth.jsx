import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    async function signIn({email, password}) {
        
        try {
            const response = await api.post("/sessions", {email, password});
            const { user, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({user, token})

            setLoading(false)

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:token");
        localStorage.removeItem("@foodexplorer:user");

        setData({});
        setLoading(false)
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                user: JSON.parse(user),
                token
            })

            setLoading(false)
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            signIn, 
            signOut,
            user: data.user,
            loading,
            setLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }