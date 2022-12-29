import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
            <a className="navbar-brand text-white" href="#">Rafael Carvalho</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <a className="nav-link text-white" href="#sobre">Sobre</a>
                <a className="nav-link text-white" href="#habilidades">Habilidades</a>
                <a className="nav-link text-white" href="#experiencia">Experiência</a>
                <a className="nav-link text-white" href="#projetos">Projetos</a>
                <a className="nav-link text-white" href="#contato">Contato</a>
            </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;