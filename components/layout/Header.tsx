"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/data/company";
import { megaMenu, primaryNav } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
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
            {primaryNav.map((link) => {
              const mega = megaMenu.find((m) => m.href === link.href);
              return (
                <div
                  key={link.href}
                  className="nav-item"
                  onMouseEnter={() => mega && setOpenMenu(link.href)}
                  onMouseLeave={() => mega && setOpenMenu(null)}
                >
                  <Link href={link.href} aria-haspopup={mega ? "true" : undefined} aria-expanded={mega ? openMenu === link.href : undefined}>
                    {link.label}
                  </Link>
                  {mega && openMenu === link.href && (
                    <div className="mega-panel" role="menu">
                      <div className="mega-cols">
                        {megaMenu
                          .filter((m) => m.href === link.href)
                          .map((col) => (
                            <div key={col.title} className="mega-col">
                              <h4>{col.title}</h4>
                              <ul>
                                {col.items.map((item) => (
                                  <li key={item.href}>
                                    <Link href={item.href}>{item.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hdr-right">
            <Link href="/request-a-quote" className="btn solid">
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

      <style>{`
        .site-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding-top: env(safe-area-inset-top, 0px);
          transition: background .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .site-header .bar {
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1320px; margin: 0 auto; padding: 26px 32px; transition: padding .35s ease;
        }
        .site-header.solid {
          background: rgba(10,20,32,0.97); backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line); box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }
        .site-header.solid .bar { padding: 16px 32px; }
        .logo { font-family: var(--font-space-grotesk), sans-serif; font-weight: 700; font-size: 22px; color: var(--white); letter-spacing: 0.02em; }
        .logo span { color: var(--accent); }
        nav.primary { display: flex; gap: 40px; }
        .nav-item { position: relative; }
        nav.primary a {
          font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--off-white);
          opacity: .85; font-weight: 500; position: relative; padding: 6px 0; display: inline-block;
        }
        nav.primary a:hover { opacity: 1; }
        .mega-panel {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
          margin-top: 22px; background: var(--navy); border: 1px solid var(--line);
          padding: 34px; min-width: 260px; box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }
        .mega-cols { display: flex; gap: 40px; }
        .mega-col h4 {
          font-family: var(--font-space-grotesk), sans-serif; font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 16px;
        }
        .mega-col li { margin-bottom: 10px; }
        .mega-col a { font-size: 14px; color: var(--off-white); opacity: .9; text-transform: none; letter-spacing: 0; }
        .mega-col a:hover { color: var(--accent); opacity: 1; }
        .hdr-right { display: flex; align-items: center; gap: 22px; }
        .menu-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; }
        .menu-toggle span { width: 22px; height: 1.5px; background: var(--white); display:block; }
        @media (max-width: 768px) {
          nav.primary { display: none; }
          .menu-toggle { display: flex; }
          .hdr-right .btn { display: none; }
        }
      `}</style>
    </>
  );
}
