import Item from "./Item"

function List (){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2134}/>
            </ul>
        </>
    )
}


export default List