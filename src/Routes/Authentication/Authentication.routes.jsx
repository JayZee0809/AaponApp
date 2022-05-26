import SignUp from "../../Components/Sign-up-form/Sign-Up-form.jsx";
import { SignInComponent } from "../../Components/Sign-in-form/Sign-In-Component.jsx";
import './sign-in.styles.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className='signin'>
            <SignInComponent />
            <SignUp />
        </div>
    )
};