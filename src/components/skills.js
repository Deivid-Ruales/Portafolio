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
    id: 1,
    nombre: "JavaScript",
    imagen: js
  },
  {
    id: 2,
    nombre: "Angular",
    imagen: angular
  },
  {
    id: 3,
    nombre: "Bootstrap",
    imagen: bootstrap
  },
  {
    id: 4,
    nombre: "CSS",
    imagen: css
  },
  {
    id: 5,
    nombre: "GIT",
    imagen: git
  },
  {
    id: 6,
    nombre: "HTML",
    imagen: html
  },
  {
    id: 7,
    nombre: "Java",
    imagen: java
  },
  {
    id: 8,
    nombre: "MongoDB",
    imagen: mongo
  },
  {
    id: 9,
    nombre: "MySQL",
    imagen: mysql
  },
  {
    id: 10,
    nombre: "Node.js",
    imagen: node
  },
  {
    id: 11,
    nombre: "PostgreSQL",
    imagen: postgres
  },
  {
    id: 12,
    nombre: "Python",
    imagen: python
  },
  {
    id: 13,
    nombre: "React.js",
    imagen: react
  },
  {
    id: 14,
    nombre: "SCRUM",
    imagen: scrum
  },
  {
    id: 15,
    nombre: "Spring Boot",
    imagen: spring
  },
  {
    id: 16,
    nombre: "TypeScript",
    imagen: ts
  }
]

export const Skills = () => {
  return (
    <section className="section section-skills">
      <div className="title-section">
        <h2>
          Skills
        </h2>
      </div>
      <div className="container">
        <div className="row">
          {dbSkills.map((item) => (
            <div key={item.id} className="col">
              <img className="icon-skills" src={item.imagen} title={item.nombre}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}