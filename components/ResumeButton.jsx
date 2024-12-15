import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const ResumeButton = () => {
  return (
    <div className="flex justify-center">
      <a
        href="Kamal_raj_Resume.pdf"
        download="Kamal_raj_Resume.pdf"
        className="bg-blue-500 text-white font-medium py-1.5 px-3 rounded hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 text-sm"
      >
        <FontAwesomeIcon icon={faDownload} />
        <span>Download Resume</span>
      </a>
    </div>
  );
};

export default ResumeButton;
