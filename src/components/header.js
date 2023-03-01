import logo from "../resources/icons/logo_name.PNG"

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#welcome">
            <img className="img-logo-navbar" src={logo}/>
          </a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#welcome">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#projects">Projectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#skills">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#experience">Experiencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">Acerca de</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">CV</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}