import { createContext } from "react";

import { AuthContext } from "./auth";
import { CartContext } from "./cart";
import { SearchContext } from "./search";

export const AppContext = createContext();

function AppContextProvider({children}) {
    return(
        <AppContextProvider>
            <AuthContext>
                <CartContext>
                    <SearchContext>
                        {children}
                    </SearchContext>
                </CartContext>
            </AuthContext>
        </AppContextProvider>
    )
}

export { AppContextProvider }