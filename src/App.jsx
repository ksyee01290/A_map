import { useState } from 'react';
import { DATA } from './data/organs';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import ResultBox from './components/ResultBox';
import './App.css';

export default function App() {
  const [organ, setOrgan] = useState(null);
  const [modality, setModality] = useState(null);
  const [selections, setSelections] = useState({});
  const [isDark, setIsDark] = useState(false);
  const [finalText, setFinalText] = useState('');

  function selectOrgan(id) {
    setOrgan(id);
    setModality(null);
    setSelections({});
    setFinalText('');
  }

  function selectModality(m) {
    setModality(m);
    setSelections({});
    setFinalText('');
  }

  function toggleOpt(cat, opt) {
    setSelections(prev => {
      if (prev[cat] === opt) {
        const next = { ...prev };
        delete next[cat];
        return next;
      }
      return { ...prev, [cat]: opt };
    });
  }

  function buildResult() {
    if (!organ || !modality) return '장기와 검사방법을 먼저 선택하세요.';
    const modalityData = DATA[organ].modalities[modality];
    const key = Object.keys(modalityData)
      .filter(k => k !== 'findings')
      .map(k => selections[k] || null)
      .filter(Boolean)
      .join('|');
    // console.log('selections:', selections);  //
    // console.log('생성된 key:', key);          //
    // console.log('findings:', modalityData.findings);  //
    if (!key) return '선택지를 선택하세요.';
    return modalityData.findings[key] || '해당 조합의 소견문이 없습니다.';
  }

  function generate() {
    setFinalText(buildResult());
  }

  return (
    <div className="app" data-theme={isDark ? 'dark' : ''}>
      <div className="topbar">
        <div className="logo">vet<span>·</span>findings</div>
        <div className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          <span>{isDark ? '다크' : '라이트'}</span>
          <div className="pill"><div className="knob" /></div>
        </div>
      </div>
      <div className="shell">
        <Sidebar selectedOrgan={organ} onSelect={selectOrgan} />
        <div className="main">
          <MainPanel
            organ={organ}
            modality={modality}
            selections={selections}
            onModality={selectModality}
            onToggle={toggleOpt}
          />
          <button className="generate-btn" onClick={generate}>소견문 생성</button>
          <ResultBox text={finalText} />
        </div>
      </div>
    </div>
  );
}