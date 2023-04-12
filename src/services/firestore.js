import { getFirestore,collection, addDoc,getDocs  } from "firebase/firestore";
import app from './firebase.js'
const db = getFirestore(app)

// Guarda un formulario en la base de datos, los registra por email.
export const sendForm = async (form)=>{
   try {
     //filtro para guardar en la base de datos por email
     const filter = form.find(e=>{
        return e.name==="email"
    }) 
    
    const docRef = await addDoc(collection(db,filter.value),{form})
    console.log("Document written with ID: ", docRef.id);
   } catch (e) {
    console.error("Error adding document: ", e);
   }
}
// retorna un array  con los formularios enviados por el email que queramos.
export const getForms = async (email)=>{
    const forms = await getDocs(collection(db,email));
    console.log("Cantidad de  formularios enviados"+forms.length)
}