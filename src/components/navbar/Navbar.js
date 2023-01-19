/*############################
           IMPORTACIONES
###############################*/

//Modulos

//Estilos
import "./Navbar.css"
import CardWidget from "../cardWidget/CardWidget"
//Componentes

//Core




/*############################
           LOGICA
###############################*/
const Navbar = (props) => { //F contructora

    return(
<header>
<navbar className="navbar navbar-expand-lg bg-light">
  <div className="lol container-fluid">
    <a className="navbar-brand" href="#">Yasu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Mothers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Procesadores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Memorias Ram</a>
        </li>
      </ul>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button type="button" class="btn btn-outline-dark">Dark</button>
        <CardWidget cantidad = "10"></CardWidget>
    </div>
  </div>
</navbar>
</header>
    )
    
}



/*############################
           EXPORTACIONES
###############################*/
export default Navbar 