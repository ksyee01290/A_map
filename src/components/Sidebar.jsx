import { ORGANS } from '../data/organs';

export default function Sidebar({ selectedOrgan, onSelect }) {
  return (
    <div className="sidebar">
      <div className="sidebar-label">장기 목록</div>
      {ORGANS.map(o => (
        <div
          key={o.id}
          className={`organ-item ${!o.hasData ? 'inactive' : ''} ${selectedOrgan === o.id ? 'active' : ''}`}
          onClick={() => o.hasData && onSelect(o.id)}
        >
          <div className="dot" />
          <div>
            <div className="organ-name">{o.name}</div>
            <div className="organ-sub">{o.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}