import { createContext, useState } from "react";

// este es el que tenemos que consumir
export const FiltersContext = createContext()

// este es el q nos provee de acceso al contexto
export function FiltersProvider({ children }) {

    const [filters, setFilters] = useState({
        category: 'all',
        price: 0
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}
