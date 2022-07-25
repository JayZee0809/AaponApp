import { initializeApp } from 'firebase/app';
import { getAuth,
         signInWithRedirect,
         signInWithPopup,
         GoogleAuthProvider,
         FacebookAuthProvider,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
        } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    getDocs
} from 'firebase/firestore';

const configFirebase = {
    apiKey: "AIzaSyBO7iWzzW7JSxa73cq-srB0Lvdr932tgX4",
    authDomain: "aaponapp.firebaseapp.com",
    projectId: "aaponapp",
    storageBucket: "aaponapp.appspot.com",
    messagingSenderId: "165902489855",
    appId: "1:165902489855:web:0fe473ee49e737ad2d54ca"
};


///////////////////////////////////////////////////////////////////////////////////////////////////////



const FireApp = initializeApp(configFirebase);

const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

const Providers = [googleProvider, fbProvider];

Providers.forEach(Provider => {
    Provider.setCustomParameters({
        prompt : 'select_account'
    });
    Provider.addScope('email');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const auth = getAuth(FireApp);

export const signInWithGooglePopUp = () => signInWithPopup(auth , googleProvider);
export const signInWithFacebookRedirect = () => signInWithRedirect(auth , fbProvider);

export const db = getFirestore();
////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getUserDocFromAuth = async (userAuth) => {
    if(!userAuth) return;
    try{ 
        const userDocRef = doc(db,'User',userAuth.uid);
        const userDocSnap = await getDoc(userDocRef);
        return userDocSnap;
    } catch(err) {
        console.log(err);
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createUserDocFromAuth = async (userAuth,updateNullValues) => {
    if(!userAuth) return;
    const userDocRef = doc(db,'Users',userAuth.uid);
    const userDocSnap = await getDoc(userDocRef);

    if(!userDocSnap.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...updateNullValues
            })
        } catch(err){
            console.log(err.message);
        }
    }
    return userDocRef;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    try {
        const {user} = await createUserWithEmailAndPassword(auth,email,password);
        return user;
    } catch(err) {
        if(err.code === 'auth/email-already-in-use') alert('cannot create user, email already in use');
        console.log(err.message);
    }
}

export default createAuthUserWithEmailAndPassword;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    try{
        if(!email || !password) return;
        return await signInWithEmailAndPassword(auth, email, password);
    } catch(err){
        if(err.code === 'auth/wrong-password') alert('wrong password!');
        console.log(err);
    }
}

export const signOutUser = async () => {
    try{
        await signOut(auth);
    } catch(err){
        console.log(err);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////


export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth,callback,(err)=>console.log(err));

export const getCategoriesAndDocs = async() => {
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);

    try{
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(docSnapShot => docSnapShot.data());
    }catch(err){
        console.log(err.message);
    }
}