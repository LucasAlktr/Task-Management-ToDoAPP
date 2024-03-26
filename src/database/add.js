import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./config";

export async function save (data){
    console.log('File Added');
    
    try {
      const docRef = await addDoc(collection(db, "tasks"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}