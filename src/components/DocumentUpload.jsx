import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Documentupload.css';

const UploadPage = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const navigate = useNavigate();

  const handleBrowseClick = () => {
    setMessage('');
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setMessageType('error');
      setMessage('Please select a file to upload.');
      setSelectedFile(null);
      setShowReset(false);
      return;
    }

    setSelectedFile(file);
    setMessageType('success');
    setMessage(`"${file.name}" uploaded successfully.`);
    setShowReset(true);
  };

  const handleResetFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setSelectedFile(null);
    setMessage('');
    setMessageType('');
    setShowReset(false);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setMessageType('error');
      setMessage('No file selected.');
      return;
    }

    setAnalyzing(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        const resultData = {
          summary: data.data.summary || ['No summary available'],
          risks: data.data.risks || ['No risks identified'],
          pdf_file: data.data.pdf_file,
        };
        sessionStorage.setItem('analysisResult', JSON.stringify(resultData));
        navigate('/analysis');
      } else {
        setMessageType('error');
        setMessage('Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessageType('error');
      setMessage('An error occurred during upload.');
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="upload-page">
      {!selectedFile && ( <div><h1>Upload Your Legal Document</h1>
      <p className="subtitle">Supported formats: PDF, DOCX | Max size: 10MB</p>

      <div className="upload-box" onClick={handleBrowseClick}>
        <div className="upload-icon">📤</div>
        <p>Drag and drop your file or click to browse</p>
        <button className="upload-button">Upload Document</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".pdf,.docx,.doc"
          onChange={handleFileChange}
        />
      </div>
      </div>)}

      {showReset && (
        <div className="reset-container">
          <button className="reset-button" onClick={handleResetFile}>
            Remove File ❌
          </button>
        </div>
      )}

      {message && (
        <div className={`upload-message ${messageType}`}>
          {message}
        </div>
      )}

      <p className="footer-note">Your documents are kept secure and confidential.</p>

      <div className="analyze-section">
        <button
          className="analyze-button"
          onClick={handleAnalyze}
          disabled={!selectedFile || analyzing}
        >
          {analyzing ? 'Analyzing...' : 'Analyze'}
        </button>

        {analyzing && (
          <div className="analyzing-spinner">
            <div className="spinner"></div>
            <p>Analyzing...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
