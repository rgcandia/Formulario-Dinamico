import Nav from '../Nav/Nav.jsx'
import style from './PrintForm.module.css'
import { useSelector } from 'react-redux'; 
const PrintForm = ()=>{
const {form} = useSelector(state=>state.data)
    return (
    <div>
        <Nav/>
        <div  className={style.form}>

        <br/>
        <h3>Visualización de tu formulario</h3>
        {form.map(e=>{
            return <div>
                <b>{e.name} : </b>{e.value}

            </div>
        })}
        </div>
        
    </div>
)
}
export default PrintForm;