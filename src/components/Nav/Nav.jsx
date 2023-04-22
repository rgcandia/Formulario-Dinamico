import style from './Nav.module.css'
import {useNavigate} from 'react-router-dom'
export default function Nav (){
const navigate = useNavigate();
return(<div className={style.nav}>

<div>
    <h1>Formulario Dinámico</h1>
    
</div>
<div>
<button onClick={()=>{navigate("/")}}>&#8592; Inicio</button>
<button onClick={()=>{navigate("/consulta")}}>Consulta</button>
<button  onClick={()=>{navigate("/formulario")}}>Formulario</button>
</div>
</div>)
}