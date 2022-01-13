function OutraLista({itens}){
  return(
    <div>
        {   itens.length > 0 ? (
                itens.map ((item, index) => (
                    <p key={index}>{item}</p>
                ))
            ):(
                <p>Nao existe valor</p>
            )
        }
    </div>
  )
}
export default OutraLista