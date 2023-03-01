import "../styles/welcome.css";
import geometric from "../resources/images/img_figures.png"

export const Welcome = () => {
  return (
    <section className="section section-welcome" id="welcome">
      <div className="text-welcome">
        <p className='title-welcome'>
          Hola!
        </p>
        <p className='name-welcome'>
          Soy Deivid Ruales
        </p>
        <p className='profesion-welcome'>
          Soy Programador Web
        </p>
      </div>
    </section>
  );
}