function Form(){

    function cadastrarUser(e){
        e.preventDefault()
        console.log("Usuario cadastrado")
    }

    return(
        <form onSubmit={cadastrarUser}>
            <div>
                <p>Digite algo abaixo</p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default Form