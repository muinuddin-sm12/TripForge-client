import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,

} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const successNotify = () => toast.success("User Login Successfully!")
    const errorNotify = () => toast.error("Invalid email or password!");
    const [user, setUser] = useState(null)
    // create user
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword( auth, email, password ).then(
            (result) => {
                const user = result.user;
                if(user) {
                    setUser(user)
                }
            }
        )
    }
    // login user
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        successNotify();
      })
      .catch(() => {
        errorNotify().then(() => {
          window.location.href = "/login";
        });
      });
  };
    const authInfo = {
        userRegister,
        userLogin,


    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
