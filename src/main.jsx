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
import './main.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/formulario' element={<Formulario/>}/>
      
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
