import Form from "./Form";

const Login = () => {
    return(
        <div style={{width: '90%' }}>
            <h1>This is Login Form</h1>
            <Form btn="Login" user="username" email={"email"} pass="password" findAccount="Forgot Password?" />
        </div>
    )
}

export default Login;