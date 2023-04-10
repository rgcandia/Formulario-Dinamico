import dataBase from '../../db.json'
import style from './Formulario.module.css'
const {items} = dataBase;
import Nav from '../Nav/Nav.jsx'
import { useState } from 'react';
import {sendForm} from '../../services/firestore.js'
const  Formulario = ()=>{
  const [form,setForm] = useState([]);

    const handlerSetForm = ({value,name,type})=>{
       form.some((el)=>{
        return el.name===name
       })?(()=>{
       const filter = form.filter((el)=>{
        return el.name!==name
       })
       setForm([...filter,{value,name,type}])
       })():
       setForm([...form,{value,name,type}])
      
    }
    const handleInput=(e)=>{
   switch(e.target.type){
    case "submit":
             e.preventDefault();
             console.log("verificando formulario...")
             
             if(form.length!==items.length-1){
                console.log(items.length)
                alert("No se envió el  Formulario, todos los items son requeridos")
                break;
             }
             else{
                console.log("procesando informacion...")
                alert("Se envió el Formulario")
                console.log(form)
                sendForm(form)
                break;
             }
            
   default:
    handlerSetForm(e.target)
    break;
    }
}

    const printInput = ({type,name,label,options,required},handleInput)=>{

        switch (type) {
            case 'select':
                return<div key={name}>
                    <label>{label}</label>
                    <select 
                    name={name}
                    required={required}
                    onChange={handleInput}>  
                      {options.map((el)=>{
                         return <option key={el.label} value={el.value}>{el.label}</option>
                      })}
                </select>
                </div>  
                
            case "submit":
                return <div key={label}>
                <input 
                 onClick={handleInput}
                 value="Enviar"
                 required={required}
                type={type}></input>
            </div>
        
            default:
                return<div key={label}>
                    <label >{label}</label>
                    <input 
                     name={name}
                     onChange={handleInput}
                     required={required}
                    type={type}></input>
                </div>
        }

    }

    return(
    <div 
    className={style.formulario}>
        <Nav/>
        <form>
        {items.map((item=>{
            return  printInput(item,handleInput)
            
        }))}
        </form>
        
    </div>)
}
export default Formulario;