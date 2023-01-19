/*###############################
IMPORTACIONES
#################################*/

//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';

//Estilos
import './index.css';

//Componentes
//import App from './App';
import Navbar from "./components/navbar/Navbar.js";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Footer from './components/footer/Footer';

//Core
import reportWebVitals from './reportWebVitals';
/*###############################
LOGICA
#################################*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <Navbar saludo ="Hola">
    </Navbar> 

    <ItemListContainer greeting = "Hola mundillo">
    </ItemListContainer>

    <Footer>
    </Footer>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
