import { useState, useEffect } from 'react';

export default function ResultBox({ text }) {
  const [localText, setLocalText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (text) setLocalText(text);
  }, [text]);

  function copy() {
    navigator.clipboard.writeText(localText).then(() => {
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
        <textarea
        className="result-text"
        value={localText}
        onChange={e => setLocalText(e.target.value)}
        placeholder="장기 및 소견을 선택하면 여기에 표시됩니다."
        />
      {copied && <div className="toast show">복사됨 ✓</div>}
    </div>
  );
}