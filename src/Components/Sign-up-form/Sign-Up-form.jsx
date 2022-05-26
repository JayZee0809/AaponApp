import { useState } from "react";
import createAuthUserWithEmailAndPassword, { createUserDocFromAuth } from "../../Utils/Firebase/Firebase.utils";
import Button from "../Button-Component/Button";
import { FormInput } from "../Form-input/Form-Input.component";
import './sign-up.styles.scss';

const defaultformFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const SignUp = () => {
    const [formFields,setFormFields] = useState(defaultformFields);
    const {displayName,email,password,confirmPassword} = formFields;
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {email, password, confirmPassword} = formFields;
            if(password !== confirmPassword) throw Error('password mismatch!');
            else{
                const user = await createAuthUserWithEmailAndPassword(email,password);
                if(!user) return;
                if(!user.displayName) await createUserDocFromAuth(user,{displayName});
                else await createUserDocFromAuth(user);
            }
        } catch(err){
            console.log(err);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name] : value});
    }

    return (
        <div className="sign-up-container">
            <h2>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name :' type='text' required name="displayName" onChange={handleChange} value={displayName}/>
                <FormInput label='Email :' type='email' required name="email" onChange={handleChange} value={email}/>
                <FormInput label='Password :' type='password' required name="password" onChange={handleChange} value={password}/>
                <FormInput label='Confirm password :' type='password' required name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
                <Button type="submit">Confirm</Button>
            </form>
        </div>
    )
}

export default SignUp;