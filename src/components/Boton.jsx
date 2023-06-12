//function Boton(props){
//esta es la manera como normalmente se utiliza los props
//return(
// <button>
//{props.texto}
//  </button>
//)
//}
//aqui vamos a utilizar los props con
//sintaxis de desestructuracion
//el operador ternario permite tomar deciciones en base
//a otro valor en este caso sobre los botones ya que son 2

function Boton({ texto, botonClick, manejarClick }){
    return(
        <button className={ botonClick ? "boton-click" : "boton-reiniciar"}
            onClick={manejarClick}>
            {texto}
        </button>
    )
}

export default Boton