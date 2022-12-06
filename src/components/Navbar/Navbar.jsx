import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container">
            <Link className="navbar-brand text-white" to="/">Rafael Carvalho</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <Link className="nav-link text-white" to='/'>Home</Link>
                <Link className="nav-link text-white" to='/projects'>Projetos</Link>
                {//<Link className="nav-link text-white" to='/contact'>Contato</Link>
}
            </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;