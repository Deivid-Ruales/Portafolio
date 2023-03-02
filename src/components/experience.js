import '../styles/experience.css';

const dbExperience = [
  {
    id: 1,
    jobTitle: "Técnico en sistemas de información e impresión",
    enterprise: "CG IMPORT, Pasto - Colombia",
    time: "2011 - Presente",
    achievement: "Liderar procesos de remanufactura de insumos de impresión.  |  Creación de un sistema de inventario de insumos y elementos utilizados en el servicio técnico.  |  Creación de un sistema de registro diario de trabajo, historial de operaciones y bitácora de revisiones de los equipos utilizados para el proceso remanufactura, mantenimiento y reparación.  |  Mantenimiento preventivo y correctivo de equipos de cómputo y de impresión.  |  Instalación y activación de software.  |  Administración del área de taller de soporte técnico.  |  Capacitación continua de nuevas referencias de productos lanzados al mercado.",
    tech: "Excel 2016  |  Program Adjustment (Epson)  |  ServiceTool (Canon)  |  WicReset",
    skill: "Comunicación  |  Trabajo en equipo  |  Cooperación  |  Creatividad  |  Organización  |  Investigación"
  }
]

export const Experience = () => {
  return (
    <section className="section section-experience" id="experience">
      <div className="title-section">
        <h2>
          Experiencia
        </h2>
        <div className="button-welcome">
          <a href="#navbar">▲</a>
        </div>
      </div>
      <div className="text-section">
        <div className="accordion" id="accordionExample">
          {dbExperience.map((job) => (
            <div key={job.id} className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {job.jobTitle}
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>
                    {job.enterprise} | {job.time}
                  </strong>
                  <br></br>
                  {job.achievement}
                  <br></br>
                  <strong>
                    Tecnologías:
                    <br></br>
                  </strong>
                  {job.tech}
                  <br></br>
                  <strong>
                    Aptitudes:
                  </strong>
                  <br></br>
                  {job.skill}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}