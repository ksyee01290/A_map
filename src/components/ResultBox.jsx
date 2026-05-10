import { useState } from 'react';

export default function ResultBox({ text }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <div className="result-area">
      <div className="result-header">
        <div className="section-label" style={{ margin: 0 }}>생성된 소견문</div>
        <div className="result-actions">
          <button className="action-btn" onClick={copy}>복사</button>
        </div>
      </div>
      <div className={`result-text ${!text ? 'result-empty' : ''}`}>
        {text || '장기 및 소견을 선택하면 여기에 표시됩니다.'}
      </div>
      {copied && <div className="toast show">복사됨 ✓</div>}
    </div>
  );
}