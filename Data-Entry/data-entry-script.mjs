import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, writeBatch } from "firebase/firestore";

const configFirebase = {
    apiKey: "AIzaSyBO7iWzzW7JSxa73cq-srB0Lvdr932tgX4",
    authDomain: "aaponapp.firebaseapp.com",
    projectId: "aaponapp",
    storageBucket: "aaponapp.appspot.com",
    messagingSenderId: "165902489855",
    appId: "1:165902489855:web:0fe473ee49e737ad2d54ca"
};
const FireApp = initializeApp(configFirebase);
const db = getFirestore(FireApp);
export const addCollectionAndDocuments = async(collectionKey,contents) => {
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);

    contents.forEach(content => {
        const docRef = doc(collectionRef,content.title.toLowerCase());
        batch.set(docRef,content);
    })

    try {
        await batch.commit();
        console.log('batch write done');
    }
    catch(err){
        console.log(err);
    }
}