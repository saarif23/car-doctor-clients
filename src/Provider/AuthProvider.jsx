import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axios.post('https://car-magician-server-site.vercel.app/jwt', userEmail, { withCredentials: true })
                    .then(res => {
                        console.log("token in useeffect ", res.data)
                    })
            } else {
                axios.post('https://car-magician-server-site.vercel.app/logout', userEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        logout
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;