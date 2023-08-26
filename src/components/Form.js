import './Form.css'
import Button from './Button';
import { useState } from 'react';

function Form({ formText, btn, user, pass, findAccount, email, changeForm, switchForms }) {

    const [userName, setUser] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPass, setUserPass] = useState("")

    const submitForm = (e) => {
        e.preventDefault();

        if (!(userName && userEmail && userPass)) {
            alert("Invalid input, please fill all required fields")
        } else {
            changeForm(userName, userEmail, userPass, btn)
        }
        setUser("")
        setUserEmail("")
        setUserPass("")
        return;
    }

    const switchForm = (e) => {
        e.preventDefault();
        switchForms(btn)
    }

    return (
        <div className="Form">
            <h1>{formText}</h1>
            <form className='form' onSubmit={submitForm}>
                <label htmlFor={user}>{user}</label>
                <input type='text' name={user} placeholder='Enter Username'
                    value={userName} onChange={(e) => setUser(e.target.value)} />

                <label htmlFor={email}>{email}</label>
                <input type='email' name={email} placeholder='Enter Email'
                    value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />

                <label htmlFor={pass}>{pass}</label>
                <input type='password' name={pass} placeholder='Enter password'
                    value={userPass} onChange={(e) => setUserPass(e.target.value)} />

                <a href='' onClick={(e) => switchForm(e)}>{findAccount}</a>
                <Button type='submit' text={btn} />
            </form>
            {/* <Button text={btn} onSubmit={(user, email, pass) => changeForm(userName, userEmail, userPass)} /> */}
        </div>
    )
}

export default Form;