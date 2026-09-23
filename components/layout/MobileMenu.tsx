"use client";

import Link from "next/link";
import { useEffect } from "react";
import { mobileNav } from "@/data/navigation";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div className={`mobile-menu ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
      <div className="mm-top">
        <span className="logo">
          i<span>SPACE</span>
        </span>
        <button className="mm-close" aria-label="Close menu" onClick={onClose}>
          ×
        </button>
      </div>
      <nav>
        {mobileNav.map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="/request-a-quote" className="btn solid" onClick={onClose} style={{ textAlign: "center", marginTop: 20 }}>
        Request a Quote
      </Link>

      <style>{`
        .mobile-menu {
          position: fixed; inset: 0; background: var(--navy); z-index: 200; display: flex; flex-direction: column;
          padding: 26px 26px 40px; transform: translateY(-100%); transition: transform .4s ease;
          padding-top: calc(26px + env(safe-area-inset-top, 0px));
        }
        .mobile-menu.open { transform: translateY(0); }
        .mm-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 50px; }
        .mm-close { background: none; border: none; color: var(--white); font-size: 30px; cursor: pointer; line-height: 1; }
        .mobile-menu nav { display: flex; flex-direction: column; gap: 6px; flex: 1; }
        .mobile-menu nav a {
          font-family: var(--font-space-grotesk), sans-serif; font-size: 28px; color: var(--white);
          padding: 14px 0; border-bottom: 1px solid var(--line);
        }
      `}</style>
    </div>
  );
}
