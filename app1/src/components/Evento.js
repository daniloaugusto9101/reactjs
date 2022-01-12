import Button from './evento/Button'

function Evento(){

    function primeiroEvento(){
        console.log(`Priemrio evento`)
    }

    function segundoEvento(){
        console.log(`Segundo evento`)
    }

    return(
        <div>
            <Button eventos={primeiroEvento} text="Primeiro evento"/>
            <Button eventos={segundoEvento} text="Segundo evento"/>
        </div>
    )
}
export default Evento