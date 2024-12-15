import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {
    const { user, loading } = useAuth();

    if(loading) {
        console.log("Carregando...")
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