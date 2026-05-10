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

  function selectOrgan(id) {
    setOrgan(id);
    setModality(null);
    setSelections({});
  }

  function selectModality(m) {
    setModality(m);
    setSelections({});
  }

  function toggleOpt(cat, opt) {
    const key = cat + '|' + opt;
    setSelections(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(k => { if (k.startsWith(cat + '|')) delete next[k]; });
      if (!prev[key]) next[key] = true;
      return next;
    });
  }

  function buildResult() {
    if (!organ || !modality) return '';
    const cats = DATA[organ].modalities[modality];
    return Object.keys(selections)
      .map(k => { const [c, o] = k.split('|'); return cats[c]?.[o] || ''; })
      .filter(Boolean).join(' ');
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
          <ResultBox text={buildResult()} />
        </div>
      </div>
    </div>
  );
}