import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { app } from '../firebase';
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    getAuth,
    GoogleAuthProvider,
    User,
} from 'firebase/auth';

interface AuthContextProviderProps {
    children: ReactNode;
}

interface AuthContextType {
    logIn: () => Promise<void>;
    logOut: () => Promise<void>;
    user: User | null;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    function logIn() {
        return signInWithPopup(auth, provider).then(() => {});
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    });

    return (
        <AuthContext.Provider value={{ logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}
