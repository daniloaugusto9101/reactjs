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
            <Button event={primeiroEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}
export default Evento