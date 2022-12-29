/*############################
           IMPORTACIONES
###############################*/

//Modulos

//Estilos
import "./Navbar.css"
//Componentes

//Core




/*############################
           LOGICA
###############################*/
const Navbar = (props) => { //F contructora

    const fecha = new Date()
    //Retorno que se renderiza
    return(
        <header className="navbar">
            <p>Mi primera enlace y te saludo = {props.saludo}</p>
            <p>La fecha de hoy es {fecha.getDate()}</p>
        </header>
    )
    
}



/*############################
           EXPORTACIONES
###############################*/
export default Navbar