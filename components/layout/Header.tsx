"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${solid ? "solid" : ""}`}>
        <div className="bar">
          <Link href="/" className="logo">
            i<span>SPACE</span>
          </Link>

          <nav className="primary" aria-label="Primary">
            {primaryNav.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hdr-right">
            <Link href="/request-a-quote" className="btn solid quote-btn">
              Request a Quote
            </Link>
            <button
              className="menu-toggle"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <span /> <span /> <span />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding-top: env(safe-area-inset-top, 0px);
          transition: background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          background: rgba(10, 20, 32, 0.4);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .site-header .bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1360px;
          margin: 0 auto;
          padding: 20px 32px;
          transition: padding 0.35s ease;
        }
        .site-header.solid {
          background: rgba(10, 20, 32, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(201, 138, 62, 0.2);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
        }
        .site-header.solid .bar {
          padding: 14px 32px;
        }
        .logo {
          font-family: var(--font-space-grotesk), sans-serif;
          font-weight: 700;
          font-size: 24px;
          color: var(--white);
          letter-spacing: 0.02em;
          display: inline-flex;
          align-items: baseline;
        }
        .logo span {
          color: var(--accent);
        }
        nav.primary {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        :global(.nav-link) {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #d1d5db;
          font-weight: 500;
          position: relative;
          padding: 8px 4px;
          display: inline-block;
          transition: color 0.25s ease;
        }
        :global(.nav-link:hover) {
          color: var(--white);
        }
        :global(.nav-link::after) {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 4px;
          right: 4px;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }
        :global(.nav-link:hover::after) {
          transform: scaleX(1);
        }
        .hdr-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .quote-btn {
          font-size: 11.5px;
          padding: 10px 20px;
        }
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .menu-toggle span {
          width: 22px;
          height: 1.5px;
          background: var(--white);
          display: block;
        }
        @media (max-width: 1120px) {
          nav.primary {
            gap: 16px;
          }
          :global(.nav-link) {
            font-size: 12px;
          }
        }
        @media (max-width: 960px) {
          nav.primary {
            display: none;
          }
          .menu-toggle {
            display: flex;
          }
          .hdr-right .quote-btn {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
