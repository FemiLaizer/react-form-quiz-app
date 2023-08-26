import Form from "./Form";

const SignUp = ({ submitForm, changeForm, switchForms }) => {
    return (
        <div style={{ width: '90%' }}>
            <Form formText="SignUp Form"
                btn="Sign Up"
                user="username"
                email="email"
                pass="password"
                findAccount="Already have Account?"
                submitForm={submitForm}
                changeForm={changeForm}
                switchForms={switchForms}
            />
        </div>
    )
}

export default SignUp;