import { useState, useEffect } from "react";
import {
    getRedirectResult
} from "firebase/auth";
import {
    auth,
    signInWithGooglePopUp,
    signInWithFacebookRedirect,
    signInAuthUserWithEmailAndPassword,
    getUserDocFromAuth
} from "../../Utils/Firebase/Firebase.utils.js";
import { FormInput } from "../Form-input/Form-Input.component";
import Button from "../Button-Component/Button";
import '../Sign-up-form/sign-up.styles.scss'

const defaultformFields = {
    email : '',
    password : ''
}

export const SignInComponent = () => {
    const [formFields, setFormFields] = useState(defaultformFields);

    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name] : value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email,password);
            setFormFields(defaultformFields);
        } catch(err) {
            switch(err.code){
                case 'auth/wrong-password':
                    prompt('incorrect password!');
                    break;
                case 'auth/user-not-found':
                    prompt('email not registered!');
                    break;
                default:
                    console.log(err);
            }
        }
    }
    const logGoogleUser = async () => {
        try{
            await signInWithGooglePopUp();
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await getRedirectResult(auth);
                if(response) await getUserDocFromAuth(response.user);
            } catch(err){
                if(err.code === 'auth/account-exists-with-different-credential') alert('account exists with different credentials/provider');
                else console.log(err.message);
            }
        }
        fetchData();
    },[]);

    return (
        <div className="sign-up-container">
        <h2>I have an account</h2>
        <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email :' type='email' required name="email" onChange={handleChange} value={email}/>
                <FormInput label='Password :' type='password' required name="password" onChange={handleChange} value={password}/>
                <div className="form-button-container">
                    <Button type='submit'>Confirm</Button>
                </div>
            </form>
            <div className="header-container">
                <h2>Or</h2>
            </div>
            <div className="outer-buttons-container">
                <div className="buttons-container">
                    <Button buttontype={'google'} onClick={logGoogleUser}>sign-in with google</Button>
                    <Button buttontype={'google'} onClick={signInWithFacebookRedirect}>sign-in with facebook</Button>
                    {/* <Button onClick={logTwitterUser}>sign-in with twitter</Button> */}
                </div>
            </div>
        </div>
    )
}


/*const logFBUser = async () => {
    try{
        const {user} = await signInWithFacebookPopUp();
        const userDocRef = await createUserDocFromAuth(user);
    } catch(err) {
        console.log(err);
    }
}
const logTwitterUser = async () => {
    try{
        const {user} = await signInWithTweeterPopUp();
        await createUserDocFromAuth(user);
    } catch {
        console.log('Try failed!');
    }
}

*/