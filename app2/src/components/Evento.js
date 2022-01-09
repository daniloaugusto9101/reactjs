function Evento({numero}){

    function mostrar (){
        console.log (`Total de clique ${numero}`)
}


    return(
        <div>
            <p>Clique no botao</p>
            <button onClick={mostrar}>Clique aqui</button>
        </div>
    )
}

export default Evento