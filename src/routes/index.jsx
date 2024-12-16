import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {
    const { user, loading, setLoading } = useAuth();

    if(loading) {
        if(!user) {setLoading(false)};
        return(
            <div>Carregando...</div>
        )
    }
    
    return(
        <BrowserRouter>
            {user ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}