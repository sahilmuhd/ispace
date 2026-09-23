import Reveal from "@/components/ui/Reveal";

const steps = [
  { n: "01", t: "Understand", d: "We understand the requirement and project specifications in detail." },
  { n: "02", t: "Source", d: "We identify and procure the required products and materials from qualified suppliers." },
  { n: "03", t: "Deliver", d: "We coordinate logistics and deliver in line with project requirements." },
  { n: "04", t: "Support", d: "We provide responsive after-delivery support for every engagement." }
];

export default function ProcessTimeline() {
  return (
    <section className="process">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <h2>
              From Requirement
              <br />
              to Delivery.
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="proc-line">
            {steps.map((s) => (
              <div className="proc-step" key={s.n}>
                <span className="dot" aria-hidden="true" />
                <div className="pnum">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .process { background: var(--off-white); }
        .proc-line { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; position: relative; }
        .proc-line::before { content: ""; position: absolute; top: 20px; left: 0; right: 0; height: 1px; background: var(--line-dark); }
        .proc-step { position: relative; padding-top: 44px; }
        .proc-step .dot { position: absolute; top: 12px; left: 0; width: 17px; height: 17px; border-radius: 50%; background: var(--off-white); border: 2px solid var(--accent); }
        .proc-step .pnum { font-family: var(--font-space-grotesk), sans-serif; font-size: 12px; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 10px; }
        .proc-step h3 { font-size: 19px; margin-bottom: 10px; color: var(--navy); }
        .proc-step p { font-size: 14.5px; color: var(--slate); line-height: 1.65; }
        @media (max-width: 768px) {
          .proc-line { grid-template-columns: 1fr; gap: 34px; }
          .proc-line::before { top: 0; bottom: 0; left: 8px; right: auto; width: 1px; height: auto; }
        }
      `}</style>
    </section>
  );
}
