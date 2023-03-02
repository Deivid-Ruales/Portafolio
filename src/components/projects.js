import '../styles/projects.css';
import artesanias from "../resources/images/artesanias_products.PNG"

const dbProjects = [
  {
    id: 1,
    name: "Tienda de Aresanias",
    image: artesanias,
    development: '"Trabajo colaborativo"',
    details: "Tienda en linea que ofrece productos artesanales fabricados por artesanos nariñenses. La página ofrece la opción para crear un usuario, modificar sus datos, buscar productos, y comprar. El usuario administrador tiene autorización para modificar productos, ingresar nuevos items o eliminarlos, además de revisar las compras recibidas",
    url: "",
    codeFront: "https://github.com/Big-Workers/Tienda-Virtual-React",
    codeBack: "https://github.com/Big-Workers/TiendaVirtualBackend"
  },
  {
    id: 2,
    name: "Ferretería - ingresos y egresos",
    image: "",
    development: '"Trabajo colaborativo"',
    details: "Aplicación web que permite como adiministrador, crear, modificar o eliminar empresas, empleados, ingresos o egresos de cada empresa. Facilita la administración de uno o varios negocios",
    url: "",
    codeFront: "https://github.com/Big-Workers/Ferreteria_ingreso-egreso",
    codeBack: ""
  },
]

export const Projects = () => {
  return (
    <section className="section section-projects" id="projects">
      <div className="title-section">
        <h2>
          Proyectos
        </h2>
        <div className="button-welcome">
          <a href="#navbar">▲</a>
        </div>
      </div>
      <div className="div-projects">
        {dbProjects.map((proj) => (
          <div key={proj.id} className="card">
            <img src={proj.image} className="card-img-top" alt={proj.name} />
            <div className="card-body">
              <h5 className="card-title">{proj.name}</h5>
              <p className="card-text sub-text-card">{proj.development}</p>
              <p className="card-text">{proj.details}</p>
              <div className="btn-project">
                {proj.url !== "" ?
                  <a href={proj.url} target="_blank" rel="noreferrer" className="btn btn-primary">Ir a la página</a>
                  : <></>
                }
                {proj.codeFront !== "" ?
                  <a href={proj.codeFront} target="_blank" rel="noreferrer" className="btn btn-primary">Código Fuente Frontend</a>
                  : <></>
                }
                {proj.codeBack !== "" ?
                  <a href={proj.codeBack} target="_blank" rel="noreferrer" className="btn btn-secondary">Código Fuente Backend</a>
                  : <></>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}