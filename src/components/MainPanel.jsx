import { DATA, ORGANS } from "../data/organs";

export default function MainPanel({
  organ,
  modality,
  selections,
  onModality,
  onToggle,
}) {
  if (!organ) {
    return (
      <div className="placeholder">
        <p>왼쪽에서 장기를 선택하세요</p>
      </div>
    );
  }
  const org = ORGANS.find((o) => o.id === organ);
  const organData = DATA[organ];

  return (
    <div className="main-body">
      <div className="organ-header">
        <span className="organ-header-name">{org.name}</span>
        <span className="organ-header-sub">{org.sub}</span>
      </div>
      <div className="section-label">검사 방법</div>
      <div className="chips">
        {Object.keys(organData.modalities).map((m) => (
          <button
            key={m}
            className={`chip ${modality === m ? "selected" : ""}`}
            onClick={() => onModality(m)}
          >
            {m}
          </button>
        ))}
      </div>
      {modality && (
        <>
          <div className="divider" />
          {/* 검사방법 힌트 */}
          {organData.modalities[modality].modalityHint?.length > 0 && (
            <div className="hint-box" style={{ marginBottom: "16px" }}>
              {organData.modalities[modality].modalityHint.map((h, i) => (
                <span key={i} className="hint-item">
                  · {h}
                </span>
              ))}
            </div>
          )}
          {Object.entries(organData.modalities[modality])
            .filter(([key]) => key !== 'findings' && key !== 'modalityHint')
            .filter(([key, catData]) => {
              if (!catData.showIf) return true;
              return selections[catData.showIf.cat] === catData.showIf.val;
            })
            .map(([cat, catData]) => (
              <div className="cat-block" key={cat}>
                <div className="cat-title">{catData.label}</div>
                <div className="chips">
                  {catData.options.map((opt) => (
                    <button
                      key={opt}
                      className={`chip ${selections[cat] === opt ? "selected" : ""}`}
                      onClick={() => onToggle(cat, opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {/*힌트 표시*/}
                {selections[cat] &&
                  catData.hints?.[selections[cat]]?.length > 0 && (
                    <div className="hint-box">
                      {catData.hints[selections[cat]].map((h, i) => (
                        <span key={i} className="hint-item">
                          . {h}
                        </span>
                      ))}
                    </div>
                  )}
              </div>
            ))}
        </>
      )}
    </div>
  );
}
