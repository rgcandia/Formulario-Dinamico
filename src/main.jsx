import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
//COMPONENTES
import App from './components/App/App'
import Formulario from './components/Formulario/Formulario'
import ConsultaFormulario from './components/ConsultaFormulario/ConsultaFormulario'
import PrintForm from './components/PrintForm/PrintForm.jsx'
import './main.css'
import {store} from './Redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>

    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/formulario' element={<Formulario/>}/>
      <Route path='/consulta' element={<ConsultaFormulario/>}/>
      <Route path='/send'  element={<PrintForm/>}/>
    </Routes>
    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>,
)
