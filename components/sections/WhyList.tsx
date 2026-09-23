import Reveal from "@/components/ui/Reveal";
import { whyIspace } from "@/data/company";

export default function WhyList() {
  return (
    <section className="why">
      <div className="wrap">
        <Reveal>
          <div className="section-head on-dark">
            <h2>Why iSPACE</h2>
            <p>The standards our divisions are built to hold, on every engagement.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="why-list">
            {whyIspace.map((item, i) => (
              <div className="why-item" key={item}>
                <span className="wn">{String(i + 1).padStart(2, "0")}</span>
                <span className="t">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .why { background: var(--navy); color: var(--white); }
        .why-list { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); }
        .why-item { padding: 26px 0; border-bottom: 1px solid var(--line); display: flex; align-items: baseline; gap: 18px; }
        .why-item:nth-child(odd) { padding-right: 40px; }
        .why-item .wn { font-family: var(--font-space-grotesk), sans-serif; color: var(--accent); font-size: 13px; }
        .why-item .t { font-size: 16px; font-weight: 500; }
        @media (max-width: 768px) { .why-list { grid-template-columns: 1fr; } .why-item:nth-child(odd) { padding-right: 0; } }
      `}</style>
    </section>
  );
}
