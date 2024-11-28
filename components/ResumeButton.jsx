import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file
    link.download = 'My_Resume.pdf'; // Suggests a filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300"
      >
        <FontAwesomeIcon icon="fa-thin fa-download" />
        Resume
      </button>
    </div>
  );
};

export default ResumeButton;
