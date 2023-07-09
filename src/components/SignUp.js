import Form from "./Form";

const SignUp = () => {
    return(
        <div style={{width: '90%' }}>
            <h1>This is SignUp Form</h1>
            <Form btn="Sign Up" user="username" email="email" pass="password" findAccount="Already have Account?" />
        </div>
    )
}

export default SignUp;