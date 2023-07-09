import './Form.css'
import Button from './Button';

function Form({btn, user, pass, findAccount, email}){
    const submitForm = (e) =>{
        console.log(e);
        e.preventDefault();

        if(e.textContent === "Sign Up"){
            console.log("User Sign Up");
        }if(e.textContent === "Login"){
            console.log("User Login");
        }
    }

    return(
        <div className="Form">
            <form className='form'>
                <label htmlFor={user}>{user}</label>
                <input type='text' name={user} placeholder='Enter Username' />

                <label htmlFor={email}>{email}</label>
                <input type='email' name={email} placeholder='Enter Email' />

                <label htmlFor={pass}>{pass}</label>
                <input type='password' name={pass} placeholder='Enter password' />

                <a href=''>{findAccount}</a>
                <Button text={btn} onClick={(e) => submitForm(e.currentTarget)} />
            </form>
        </div>
    )
}

export default Form;