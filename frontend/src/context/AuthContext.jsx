import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const [user, setUser] = useState(() => {

        const storedUser = localStorage.getItem("user");

        return storedUser ? JSON.parse(storedUser) : null;

    });

    function login(loginResponse) {

        const jwt = loginResponse.accessToken;

        const currentUser = {

            id: loginResponse.userId,
            fullName: loginResponse.fullName,
            email: loginResponse.email

        };

        localStorage.setItem("token", jwt);

        localStorage.setItem(
            "user",
            JSON.stringify(currentUser)
        );

        setToken(jwt);

        setUser(currentUser);

    }

    function logout() {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        setToken(null);

        setUser(null);

    }

    const value = useMemo(() => ({

        token,
        user,
        login,
        logout,
        isAuthenticated: !!token

    }), [token, user]);

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}