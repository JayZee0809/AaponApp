import { addCollectionAndDocuments } from "./data-entry-script.mjs";
import Products from "../src/shop-data.mjs";


try{
    await addCollectionAndDocuments('categories',Products);
}catch(err){
    console.log(err);
}