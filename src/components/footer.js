import "../styles/footer.css";
import whatsapp from "../resources/icons/icon_whatsapp.png";
import linkedin from "../resources/icons/icon_linkedin.png";
import github from "../resources/icons/icon_github.png";

export const Footer = () => {
  return (
    <>
      <div className="div-footer">
        <div className="div-incons-contact">
          <a href="https://wa.me/573153895621?text=Hola%20Deivid" target="_blank" rel="noreferrer" title="WhatsApp Contact">
            <img src={whatsapp} className="icon-contact" alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/deivid-ruales-199b66239" target="_blank" rel="noreferrer" title="LinkedIn Profile">
            <img src={linkedin} className="icon-contact" alt="Linkedin" />
          </a>
          <a href="https://github.com/Deivid-Ruales" target="_blank" rel="noreferrer" title="GitHub Profile">
            <img src={github} className="icon-contact" alt="GitHub" />
          </a>
        </div>
        <p className="text-footer">
          Copyright © 2023&nbsp;Deivid Ruales&nbsp;•&nbsp;Web Developer
        </p>
      </div>
    </>
  );
}