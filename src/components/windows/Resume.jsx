import React, { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import { profile } from "../../config/portfolioData";
import { FaFilePdf, FaDownload, FaExternalLinkAlt, FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import "./resume.scss";

const Resume = ({ windowName }) => {
  const [pdfAvailable, setPdfAvailable] = useState(null); // null = checking, true = found, false = missing

  useEffect(() => {
    // Check if the resume PDF file exists in public/
    fetch(profile.resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (res.ok && res.headers.get("content-type")?.includes("pdf")) {
          setPdfAvailable(true);
        } else if (res.ok && !res.headers.get("content-type")?.includes("html")) {
          // Some dev servers return 200 with octet-stream for pdf
          setPdfAvailable(true);
        } else {
          setPdfAvailable(false);
        }
      })
      .catch(() => setPdfAvailable(false));
  }, []);

  return (
    <MacWindow windowName={windowName} width="46vw" height="42vw">
      <div className="resume-window">
        {pdfAvailable ? (
          <iframe
            src={profile.resumeUrl}
            title={`${profile.name} Resume`}
            frameBorder="0"
          />
        ) : (
          <div className="resume-fallback-card">
            <div className="fallback-header">
              <div className="pdf-icon-badge">
                <FaFilePdf />
              </div>
              <div>
                <h2>{profile.name}</h2>
                <p className="subtitle">{profile.role}</p>
              </div>
            </div>

            <div className="fallback-body">
              <div className="info-section">
                <div className="section-title">
                  <FaGraduationCap /> Education
                </div>
                <div className="section-content">
                  <strong>{profile.education.institution}</strong>
                  <p>{profile.education.degree} ({profile.education.period})</p>
                  <p className="meta-text">CGPA: {profile.education.cgpa} • {profile.education.location}</p>
                </div>
              </div>

              <div className="info-section">
                <div className="section-title">
                  <FaBriefcase /> Experience
                </div>
                <div className="section-content">
                  <strong>{profile.experience.role}</strong>
                  <p>{profile.experience.organization} • {profile.experience.mode}</p>
                  <p className="desc-text">{profile.experience.description}</p>
                </div>
              </div>

              <div className="info-section">
                <div className="section-title">
                  <FaCode /> Core Expertise
                </div>
                <div className="skills-tags">
                  {profile.skills.slice(0, 12).map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="fallback-footer">
              <span className="file-notice">
                Expected file: <code>{profile.resumeUrl.replace("/", "")}</code>
              </span>
              <div className="actions">
                <a
                  href={profile.resumeUrl}
                  download="Naitik_Chitransh_Resume.pdf"
                  className="resume-action-btn primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDownload /> Download PDF
                </a>
                <a
                  href={profile.linkedin}
                  className="resume-action-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </MacWindow>
  );
};

export default Resume;
