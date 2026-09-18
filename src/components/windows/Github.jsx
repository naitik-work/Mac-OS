import React from "react";
import MacWindow from "./MacWindow";
import { projects } from "../../config/portfolioData";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>
      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
      </div>
    </div>
  );
};

const Github = ({ windowName }) => {
  return (
    <MacWindow windowName={windowName}>
      <div className="cards">
        {projects.map((project) => {
          return <GitCard key={project.id} data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
