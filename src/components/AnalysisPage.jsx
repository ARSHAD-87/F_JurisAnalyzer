import React, { useEffect, useState } from 'react';
import './AnalysisPage.css';

const AnalysisPage = () => {
  const [analysisResult, setAnalysisResult] = useState({
    summary: [],
    risks: [],
    pdf_file: '', // Ensure this is initialized
  });

  useEffect(() => {
    const stored = sessionStorage.getItem('analysisResult');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAnalysisResult(parsed);
      } catch (e) {
        console.error('Invalid sessionStorage format:', e);
      }
    }
  }, []);

  return (
    <div>
      <h2 className="analysis-heading">Analysis Result</h2>
      <div id="result" className="result-box">
        <div id="summary_text">
          <h3>Summary:</h3>
          <ul>
            {analysisResult.summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="risk_text">
          <h3>Risks:</h3>
          <ul>
            {analysisResult.risks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <div id="download">
        {/* Ensure the download link uses the correct path */}
        {analysisResult.pdf_file && (
          <a href={analysisResult.pdf_file} download="analysis_result.pdf">
            Download PDF
          </a>
        )}
      </div>
    </div>
  );
};

export default AnalysisPage;