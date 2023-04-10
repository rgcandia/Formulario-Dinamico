import { getFirestore,collection, addDoc,getDoc } from "firebase/firestore";
import app from './firebase.js'
const db = getFirestore(app)

export const sendForm = async (form)=>{
    //filtro para guardar en la base de datos por email
    const filter = form.find(e=>{
        return e.name==="email"
    }) 

    const docRef = await addDoc(collection(db,filter.value),{form})
    console.log("Document written with ID: ", docRef.id);
}