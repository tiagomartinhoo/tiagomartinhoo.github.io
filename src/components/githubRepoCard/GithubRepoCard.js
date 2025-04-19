import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import { FiExternalLink } from "react-icons/fi";

export default function GithubRepoCard({ repo, theme }) {
  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="repo-card-div"
        style={{ backgroundColor: repo.background }}
        key={repo.id}
      >
        <div className="repo-card-horizontal">
          <div className="repo-photo-wrapper">
            <div className="repo-photo-circle">
              <img
                src={require(`../../assets/images/experience/${repo.imageSrc}`)}
                alt="Repo Owner"
                className="repo-photo"
              />
            </div>
          </div>

          <div className="repo-info">
            <div className="repo-name-row">
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
              <p className="repo-date" style={{ color: theme.text }}>
                {repo.date}
              </p>
            </div>

            <p className="repo-description" style={{ color: theme.text }}>
              {repo.description}
            </p>

            <div className="repo-details">
              <ProjectLanguages
                className="repo-languages"
                logos={repo.languages}
              />
            <div className="repo-button-row">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
                style={{ backgroundColor: theme.text }}
              >
                <FiExternalLink size={16} style={{ marginRight: 8, color: 'white' }} />
                <span style={{ color: 'white' }}>Website</span>
              </a>
            </div>
            </div>

          </div>
        </div>
      </div>
    </Fade>
  );
}
