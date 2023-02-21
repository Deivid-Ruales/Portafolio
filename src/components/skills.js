import "../styles/skills.css";
import js from "../resources/icons/icon_javascript.png"
import angular from "../resources/icons/icon_angular.png"
import bootstrap from "../resources/icons/icon_bootstrap.png"
import css from "../resources/icons/icon_css.png"
import git from "../resources/icons/icon_git.png"
import html from "../resources/icons/icon_html.png"
import java from "../resources/icons/icon_java.png"
import mongo from "../resources/icons/icon_mongo.png"
import mysql from "../resources/icons/icon_mysql.png"
import node from "../resources/icons/icon_nodejs.png"
import postgres from "../resources/icons/icon_postgresql.png"
import python from "../resources/icons/icon_python.png"
import react from "../resources/icons/icon_react.png"
import scrum from "../resources/icons/icon_scrum.png"
import spring from "../resources/icons/icon_spring.png"
import ts from "../resources/icons/icon_typescript.png"

const dbSkills = [
  {
    nombre: "JavaScript",
    imagen: js 
  },
  {
    nombre: "Angular",
    imagen: angular
  },
  {
    nombre: "Bootstrap",
    imagen: bootstrap
  },
  {
    nombre: "CSS",
    imagen: css
  },
  {
    nombre: "GIT",
    imagen: git
  },
  {
    nombre: "HTML",
    imagen: html
  },
  {
    nombre: "Java",
    imagen: java
  },
  {
    nombre: "MongoDB",
    imagen: mongo
  },
  {
    nombre: "MySQL",
    imagen: mysql
  },
  {
    nombre: "Node.js",
    imagen: node   
  },
  {
    nombre: "PostgreSQL",
    imagen: postgres
  },
  {
    nombre: "Python",
    imagen: python
  },
  {
    nombre: "React.js",
    imagen: react 
  },
  {
    nombre: "SCRUM",
    imagen: scrum
  },
  {
    nombre: "Spring Boot",
    imagen: spring
  },
  {
    nombre: "TypeScript",
    imagen: ts
  }
]

export const Skills = () => {
  return (
    <section className="section section-skills">
      <div className="container text-center">
        <div className="row">
          {dbSkills.map((item) => (
            <div className="col">
              <img className="icon-skills" src={item.imagen} />
              <p className="text-skills">{item.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}