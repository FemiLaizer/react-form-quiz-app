import SignUp from "./SignUp";
import Login from "./Login";
import { useState } from "react";

import './Forms.css'

function Forms({ setshowForms, saveUser, checkUser }) {

    const [signUp, setSignUp] = useState(true)
    const [login, setLogin] = useState(false)

    const changeForm = (user, email, pass, text) => {
        if (text === "Sign Up") {
            saveUser({ user, email, pass })
            setSignUp(!signUp)
            setLogin(!login)
        } else if (text === "Login") {
            setshowForms()
            checkUser(user, email, pass)
        }
    }

    const switchForms = (text) => {
        if (text === "Sign Up") {
            setSignUp(!signUp)
            setLogin(!login)
        } else if (text === "Login") {
            setSignUp(!signUp)
            setLogin(!login)
        }
    }

    return (
        <div className="Forms">
            {signUp && <SignUp changeForm={changeForm} switchForms={switchForms} />}
            {login && <Login changeForm={changeForm} switchForms={switchForms} />}
        </div>
    )
}

export default Forms;