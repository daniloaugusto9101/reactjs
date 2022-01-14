import {Link} from 'react-router-dom'

function Navbar(){
  return(

    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>

  )
}
export default Navbar