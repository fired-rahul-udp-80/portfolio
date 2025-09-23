import React from "react";
import { Link } from "react-router";
import "./CertificateSection.css"; // <-- import the CSS below

const Achievement = () => {
  return (
    <div className="certificate-wrap w-full bg-[#141618] min-h-[200px] mt-5">
      <Link to="https://drive.google.com/drive/u/1/folders/1eQ8uQJLOvj5svqQisTMT8lmd4yTEfddM" target="_blank" className="cert-link" aria-label="Open certificates">
        <span className="cert-border" aria-hidden="true" />
        <span className="cert-content">My Certificates</span>
      </Link>
    </div>
  );
};

export default  Achievement;
