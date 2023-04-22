import { useRef, useState } from 'react';
import Nav from '../Nav/Nav.jsx'
import style from './ConsultaFormulario.module.css'
import {getForms} from '../../services/firestore.js'
import {setForms,setName} from '../../Redux/formSlice.js'
import { useDispatch,useSelector } from 'react-redux';

const ConsultaFormulario = ()=>{
    const {forms} = useSelector(state=>state.data)
    const dispatch = useDispatch();
    const [state,setState] = useState(null);
    const inputRef = useRef(null)
    const handleInput=(e)=>{
        const {value} = e.target;
        setState({value})
    }
    const handleEnter = async (event)=>{
        const tecla = event.key
        if(tecla==="Enter"){
            console.log("Buscando formularios de email: "+state?.value)
             const form = await getForms(state?.value)
             console.log(form)
           dispatch (setForms(form))
           dispatch (setName(state?.value))
           inputRef.current.value = "";
        }
        
    }
    return (<div>
        <Nav/>
       <div className={style.consulta}>
        <h1>Consulta de Formularios</h1>
       
        
        <label>Email</label>
        <br/>
        <input 
        ref={inputRef} 
        onChange={handleInput}
        onKeyDown={handleEnter}
        ></input>
        
        </div> 
    </div>)
}
export default ConsultaFormulario;