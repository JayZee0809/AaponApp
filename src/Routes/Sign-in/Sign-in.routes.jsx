import {
    auth,
    signInWithGooglePopUp,
    signInWithFacebookRedirect,
    signInWithTweeterPopUp,
    createUserDocFromAuth 
    } from "../../Utils/Firebase/Firebase.utils.js";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../Components/Sign-up-form/Sign-Up-form.jsx";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await getRedirectResult(auth);
                //console.log(response);
                if(response) await createUserDocFromAuth(response.user);
            } catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[]);
    const logGoogleUser = async () => {
        try{
            const {user} = await signInWithGooglePopUp();
            await createUserDocFromAuth(user);
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
    // const logFBUser = async () => {
    //     try{
    //         const {user} = await signInWithFacebookPopUp();
    //         // const userDocRef = 
    //         await createUserDocFromAuth(user);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }
    return (
        <>
            <h1>Sign-In page</h1>
            <button onClick={logGoogleUser}>sign-in with google</button>
            <button onClick={signInWithFacebookRedirect}>sign-in with facebook</button>
            <button onClick={logTwitterUser}>sign-in with twitter</button>
            <SignUp/>
        </>
    )
};