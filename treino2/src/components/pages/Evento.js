import Button from "./evento/Button"

function Evento(){
    function meuEvento(){
        console.log("Meu evento pai 1")
    }

    function meuEvento2(){
        console.log("Meu evento pai 2")
    }

    return(
        <>
            <Button event={meuEvento} text={"Primeiro evento"}/>
            <Button event={meuEvento2} text={"Segundo evento"}/>
        </>
    )
}

export default Evento