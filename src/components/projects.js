import '../styles/projects.css';
import artesanias from "../resources/images/artesanias_products.PNG"

const dbProjects = [
  {
    id: 1,
    name: "Aresanias",
    image: artesanias,
    development: '"Trabajo colaborativo"',
    details: "Tienda en linea que ofrece productos artesanales fabricados por artesanos nariñenses. La página ofrece la opción para crear un usuario, modificar sus datos, buscar productos, y comprar. El usuario administrador tiene autorización para modificar productos, ingresar nuevos items o eliminarlos, además de revisar las compras recibidas",
    url: "https://github.com/Big-Workers/Tienda-Virtual-React",
    codeFront: "https://github.com/Big-Workers/Tienda-Virtual-React",
    codeBack: "https://github.com/Big-Workers/TiendaVirtualBackend"    
  },
  {
    id: 2,
    name: "Aresanias",
    image: artesanias,
    development: '"Trabajo colaborativo"',
    details: "Tienda en linea que ofrece productos artesanales fabricados por artesanos nariñenses. La página ofrece la opción para crear un usuario, modificar sus datos, buscar productos, y comprar. El usuario administrador tiene autorización para modificar productos, ingresar nuevos items o eliminarlos, además de revisar las compras recibidas",
    url: "",
    codeFront: "",
    codeBack: ""    
  },
]

export const Projects = () => {
  return (
    <section className="section section-projects" id="projects">
      <div className="title-section">
        <h2>
          Projects
        </h2>
      </div>
      {dbProjects.map((proj) => (
        <div key={proj.id} className="card">
          <img src={proj.image} className="card-img-top" alt={proj.name} />
          <div className="card-body">
            <h5 className="card-title">{proj.name}</h5>
            <p className="card-text sub-text-card">{proj.development}</p>
            <p className="card-text">{proj.details}</p>
            <div className="btn-project">
              <a href={proj.url} target="_blank" className="btn btn-primary">Ir a la página</a>
              <a href={proj.codeFront} target="_blank" className="btn btn-secondary">Código Fuente Frontend</a>
              <a href={proj.codeBack} target="_blank" className="btn btn-secondary">Código Fuente Backend</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}