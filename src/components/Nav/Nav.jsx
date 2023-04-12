import style from './Nav.module.css'
import {useNavigate} from 'react-router-dom'
export default function Nav (){
const navigate = useNavigate();
return(<div className={style.nav}>

<div>
    <h1>Formulario Dinámico</h1>
    
</div>
<div>
<button onClick={()=>{navigate("/")}}>&#8592; Atras</button>
<button>Consulta</button>
</div>
</div>)
}