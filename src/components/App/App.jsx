import style from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useNavigate } from 'react-router-dom';
//componentes

function App() {
const navigate = useNavigate()

  return (
    <div className={style.App}>
   <div className={style.lista}>

   <h1>Formulario Dinámico</h1>
    <h3> # Challenge Form-Builder.</h3>
  <p>
​<br/>
- Realizar una app en React.js iniciando dicha app con Vite.
​<br/>
- Que lea el archivo JSON compartido al final de este README y genere con cada ítem una interfaz de app de encuesta (como Google Forms).
​​<br/>
- En cuanto a diseño y estética tiene que diferir de Google Forms. Podés utilizar cualquier librería que creas necesaria.
​<br/>
- Las respuestas de la encuesta deben ser enviadas a una base de datos de Firebase.
​​<br/>
- Dicha base de datos tiene que ser de su propiedad. No nos compartas acceso a la base de datos.
​​<br/>
- Por último, traé las respuestas de la base de datos ya mencionada y mostralas en la misma app pero en otra ruta. Al presionar “enviar” en el formulario tiene que aparecer un mensaje y el acceso a esa ruta en donde estarán las respuestas. El diseño y estética queda a libre elección.
​​<br/>
- Una vez realizado, compartinos tu challenge mediante gitHub 
​<br/>
- Realiza un README explicativo
​​<br/>
```
Nota: ​<br/>El deploy puede ser donde quieras (vercel, github pages, etc.). No vamos a solicitarte el acceso a tu base de datos. Cualquier hipótesis o consideración debe estar aclarada en el Readme
  </p>
   </div>
 <div className={style.ingresar}>

 <button
  onClick={()=>{navigate('/formulario')}} 
  className={style.btnPrincipal}
  >Ingresar</button>
 </div>
    </div>

  )
}

export default App
