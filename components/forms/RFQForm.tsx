"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const requirementTypes = [
  "Procurement & Supplies",
  "Industrial Services",
  "Equipment Leasing",
  "Metal Fabrication",
  "Other"
];

export default function RFQForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("submitting");
    setError(null);
    try {
      // Wire this to a real endpoint (e.g. /api/rfq) backed by server-side
      // validation and file-type/size sanitization before going live.
      // const res = await fetch("/api/rfq", { method: "POST", body: new FormData(form) });
      // if (!res.ok) throw new Error("Request failed");
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong submitting your request. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rfq-success" role="status">
        <h3>Request received.</h3>
        <p>A member of our procurement team will respond with next steps shortly.</p>
      </div>
    );
  }

  return (
    <form className="rfq-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="f-name">Name</label>
        <input id="f-name" name="name" required type="text" autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="f-company">Company</label>
        <input id="f-company" name="company" required type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" required type="email" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="f-phone">Phone</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="f-country">Country</label>
        <select id="f-country" name="country" defaultValue="Kuwait">
          <option>Kuwait</option>
          <option>Qatar</option>
          <option>Iraq</option>
          <option>UAE</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-type">Requirement Type</label>
        <select id="f-type" name="requirementType" defaultValue={requirementTypes[0]}>
          {requirementTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="f-details">Project / Requirement Details</label>
        <textarea id="f-details" name="details" required />
      </div>
      <div className="field">
        <label htmlFor="f-file">Attachment</label>
        <input id="f-file" name="attachment" type="file" />
      </div>
      <div className="field">
        <label htmlFor="f-contact">Preferred Contact Method</label>
        <select id="f-contact" name="preferredContact" defaultValue="Email">
          <option>Email</option>
          <option>Phone</option>
        </select>
      </div>

      <div className="submit-row">
        <button type="submit" className="btn solid" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting…" : "Submit Request"}
        </button>
        {error && (
          <span className="form-status error" role="alert">
            {error}
          </span>
        )}
      </div>

      <style>{`
        .rfq-form { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field.full { grid-column: 1 / -1; }
        .field label { font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--slate); font-weight: 600; }
        .field input, .field select, .field textarea {
          border: 1px solid var(--line-dark); background: var(--off-white); padding: 13px 14px;
          font-family: var(--font-inter), sans-serif; font-size: 14.5px; color: var(--navy); outline: none;
          transition: border-color .25s ease;
        }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--accent); }
        .field textarea { resize: vertical; min-height: 110px; }
        .submit-row { grid-column: 1 / -1; display: flex; align-items: center; gap: 20px; margin-top: 6px; flex-wrap: wrap; }
        .form-status { font-size: 13px; color: var(--slate); }
        .form-status.error { color: #b3452c; }
        .rfq-success { border: 1px solid var(--line-dark); padding: 40px; background: var(--off-white); }
        .rfq-success h3 { color: var(--navy); font-size: 22px; margin-bottom: 10px; }
        .rfq-success p { color: var(--slate); }
        @media (max-width: 768px) { .rfq-form { grid-template-columns: 1fr; } }
      `}</style>
    </form>
  );
}
