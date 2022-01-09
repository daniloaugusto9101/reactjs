function Form(){

    function testeClick(){
        console.log("Voce clicou")
    }

    return(
        <div>
            <div>
                <p>Clique no botao abaixo</p>
            </div>
            <div>
                <button onClick={testeClick}>Clique aqui</button>
            </div>
        </div>
    )
}
export default Form