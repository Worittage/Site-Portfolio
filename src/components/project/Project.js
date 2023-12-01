import React, { Component } from 'react'
import "./style.css"

import project01 from "../../img/projects/01.jpg"

export class Project extends Component {
  render() {
    return (
      <div>
        <li className="project">
        <a href="./project-page.html">
            <img src={project01} alt="Project img" className="project__img" />
            <h3 className="project__title">Gaming streaming portal</h3>
        </a>
        </li>
      </div>
    )
  }
}

export default Project