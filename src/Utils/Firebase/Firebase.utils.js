import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const configFirebase = {
    apiKey: "AIzaSyBO7iWzzW7JSxa73cq-srB0Lvdr932tgX4",
    authDomain: "aaponapp.firebaseapp.com",
    projectId: "aaponapp",
    storageBucket: "aaponapp.appspot.com",
    messagingSenderId: "165902489855",
    appId: "1:165902489855:web:0fe473ee49e737ad2d54ca"
};

const FireApp = initializeApp(configFirebase);

const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const gitProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const Providers = [googleProvider, fbProvider, gitProvider, twitterProvider];

Providers.forEach(Provider => {
    Provider.setCustomParameters({
        prompt : 'select_account'
    });
});

export const auth = getAuth(FireApp);

export const signInWithGooglePopUp = () => signInWithPopup(auth , googleProvider);
export const signInWithFacebookPopUp = () => signInWithPopup(auth , fbProvider);
export const signInWithGithubPopUp = () => signInWithRedirect(auth , gitProvider);
export const signInWithTweeterPopUp = () => signInWithPopup(auth , twitterProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'Users',userAuth.uid);
    const userDocSnap = await getDoc(userDocRef);
    //console.log(userDocSnap,'/n',userDocRef,userDocSnap.exists());

    if(!userDocSnap.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(err){
            console.log(err.message);
        }
    }
    return userDocRef;
}



//z3zgG6vaR31gQH2FBGAv8v2QIbuQLNZn3IkfsGpWKSRGJs6ApN  SE9IQ2FEb2ZiS0duU083emV1NTI6MTpjaQ