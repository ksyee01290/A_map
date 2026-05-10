import { DATA, ORGANS } from '../data/organs';

export default function MainPanel({ organ, modality, selections, onModality, onToggle }) {
  if (!organ) {
    return (
      <div className="placeholder">
        <p>왼쪽에서 장기를 선택하세요</p>
      </div>
    );
  }
  const org = ORGANS.find(o => o.id === organ);
  const organData = DATA[organ];

  return (
    <div className="main-body">
      <div className="organ-header">
        <span className="organ-header-name">{org.name}</span>
        <span className="organ-header-sub">{org.sub}</span>
      </div>
      <div className="section-label">검사 방법</div>
      <div className="chips">
        {Object.keys(organData.modalities).map(m => (
          <button
            key={m}
            className={`chip ${modality === m ? 'selected' : ''}`}
            onClick={() => onModality(m)}
          >{m}</button>
        ))}
      </div>
      {modality && (
        <>
          <div className="divider" />
          {Object.entries(organData.modalities[modality]).map(([cat, opts]) => (
            <div className="cat-block" key={cat}>
              <div className="cat-title">{cat}</div>
              <div className="chips">
                {Object.keys(opts).map(opt => {
                  const key = cat + '|' + opt;
                  return (
                    <button
                      key={opt}
                      className={`chip ${selections[key] ? 'selected' : ''}`}
                      onClick={() => onToggle(cat, opt)}
                    >{opt}</button>
                  );
                })}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}