import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";


export function Routes() {
    const x = true;
    return(
        <BrowserRouter>
            
            {x ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}