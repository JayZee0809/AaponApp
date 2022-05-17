import { signInWithGooglePopUp, signInWithFacebookPopUp, signInWithTweeterPopUp, createUserDocFromAuth } from "../../Utils/Firebase/Firebase.utils.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const logGoogleUser = async () => {
        try{
            const {user} = await signInWithGooglePopUp();
            createUserDocFromAuth(user);
        } catch {
            console.log('Try failed!');
        }
    }
    const logTwitterUser = async () => {
        try{
            const {user} = await signInWithTweeterPopUp();
            createUserDocFromAuth(user);
        } catch {
            console.log('Try failed!');
        }
    }
    const logFBUser = async () => {
        try{
            const {user} = await signInWithFacebookPopUp();
            const userDocRef = await createUserDocFromAuth(user);
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <>
            <h1>Sign-In page</h1>
            <button onClick={logGoogleUser}>sign-in with google</button>
            <button onClick={logFBUser}>sign-in with facebook</button>
            <button onClick={logTwitterUser}>sign-in with twitter</button>
        </>
    )
};