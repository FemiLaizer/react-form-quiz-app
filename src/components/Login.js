import Form from "./Form";

const Login = ({ submitForm, changeForm, switchForms }) => {
    return (

        <div style={{ width: '90%' }}>
            {
                <Form formText="Login Form"
                    btn="Login"
                    user="username"
                    email={"email"}
                    pass="password"
                    findAccount="Forgot Password?"
                    submitForm={submitForm}
                    changeForm={changeForm}
                    switchForms={switchForms}
                />
            }
        </div>
    )
}

export default Login;