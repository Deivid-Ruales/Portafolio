

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Deivid_Ruales</a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Curriculum Vitae</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Study</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">ContactMe</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}