// Main navigation header — sticky at the top of every page.
// Has a desktop dropdown menu and a mobile hamburger menu.
// The dropdowns use hover + focus states so they work for mouse and keyboard users.
// Mobile nav collapses submenus with an expand/collapse pattern.

import { Link, useLocation } from "react-router-dom";
import { useState, useCallback } from "react";
import { HashLink } from "react-router-hash-link";

type Child = {
  to: "/about" | "/services" | "/resources" | "/get-involved";
  hash: string;
  label: string;
};

type NavLink = {
  to: "/" | "/about" | "/services" | "/resources" | "/get-involved" | "/contact";
  label: string;
  children?: Child[];
};

const navLinks: NavLink[] = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about", hash: "mission", label: "Mission & Ethos" },
      { to: "/about", hash: "values", label: "Our Values" },
      { to: "/about", hash: "goals", label: "Our Goals" },
      { to: "/about", hash: "characters", label: "Characters" },
    ],
  },
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services", hash: "bubble-world", label: "Bubble World" },
      { to: "/services", hash: "offerings", label: "Our Offerings" },
      { to: "/services", hash: "support-groups", label: "Who We Support" },
    ],
  },
  {
    to: "/resources",
    label: "Resources",
    children: [
      { to: "/resources", hash: "downloads", label: "Free Downloads" },
      { to: "/resources", hash: "videos", label: "Videos & Impact" },
      { to: "/resources", hash: "blog", label: "Latest News" },
    ],
  },
  {
    to: "/get-involved",
    label: "Get Involved",
    children: [
      { to: "/get-involved", hash: "booking", label: "Book a Session" },
      { to: "/get-involved", hash: "donate", label: "Donate" },
      { to: "/get-involved", hash: "work-with-us", label: "Work With Us" },
      { to: "/get-involved", hash: "members", label: "Members" },
      { to: "/get-involved", hash: "professionals", label: "Professionals" },
    ],
  },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const location = useLocation();

  const isActiveTopLevel = useCallback(
    (to: string) => {
      const current = location.pathname;

      // Homepage: ensure Home stays active on load/refresh at "/".
      if (to === "/") return current === "/";

      return current === to;
    },
    [location.pathname],
  );

  return (
    <header className="sticky top-0 z-40 bg-navy shadow-lg" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="Buttons & Bubbles — Home">
          <span className="text-xl font-extrabold text-gold">Buttons & Bubbles</span>
          <span className="hidden text-xs text-cream sm:block">CIC</span>
        </Link>

        {/* Desktop nav — visible from md breakpoint and up */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const hasChildren = !!link.children?.length;
              const isOpen = openMenu === link.to;

              return (
                <li
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenMenu(link.to)}
                  onMouseLeave={() => hasChildren && setOpenMenu(null)}
                >
                  <Link
                    to={link.to}
                    className={
                      `inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-cream transition-colors hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none ` +
                      (isActiveTopLevel(link.to) ? "bg-navy-light text-gold" : "")
                    }
                    aria-current={isActiveTopLevel(link.to) ? "page" : undefined}
                    aria-haspopup={hasChildren || undefined}
                    aria-expanded={hasChildren ? isOpen : undefined}
                    onFocus={() => hasChildren && setOpenMenu(link.to)}
                  >
                    {link.label}
                    {hasChildren && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown menu — appears on hover/focus */}
                  {hasChildren && isOpen && (
                    <div className="absolute left-0 top-full pt-1">
                      <ul
                        className="min-w-[14rem] rounded-xl border border-navy-light bg-navy py-2 shadow-2xl animate-fade-in"
                        role="menu"
                      >
                        {link.children!.map((child) => (
                          <li key={`${child.to}#${child.hash}`} role="none">
                            <HashLink
                              to={`${child.to}#${child.hash}`}
                              role="menuitem"
                              smooth
                              className="block px-4 py-2 text-sm text-cream transition-colors hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none"
                              onClick={() => {
                                setOpenMenu(null);
                              }}
                            >
                              {child.label}
                            </HashLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="rounded-lg p-2 text-gold hover:bg-navy-light md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel — slides open below the header */}
      {mobileOpen && (
        <nav
          className="border-t border-navy-light bg-navy px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const hasChildren = !!link.children?.length;
              const isOpen = mobileSub === link.to;

              return (
                <li key={link.to}>
                  <div className="flex items-center">
                    <Link
                      to={link.to}
                      className={
                        `flex-1 rounded-lg px-3 py-2 text-sm font-medium text-cream transition-colors hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none active:bg-navy-light active:text-gold ` +
                        (isActiveTopLevel(link.to) ? "bg-navy-light text-gold" : "")
                      }
                      aria-current={isActiveTopLevel(link.to) ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        className="ml-1 rounded-lg p-2 text-cream hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none active:bg-navy-light active:text-gold"
                        aria-label={isOpen ? `Collapse ${link.label}` : `Expand ${link.label}`}
                        aria-expanded={isOpen}
                        onClick={() => setMobileSub(isOpen ? null : link.to)}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                          className={
                            isOpen ? "rotate-180 transition-transform" : "transition-transform"
                          }
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Expanded sub-menu items on mobile */}
                  {hasChildren && isOpen && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-navy-light pl-3">
                      {link.children!.map((child) => (
                        <li key={`${child.to}#${child.hash}`}>
                          <HashLink
                            to={`${child.to}#${child.hash}`}
                            smooth
                            className="block rounded-lg px-3 py-2 text-sm text-cream/90 transition-colors hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none active:bg-navy-light active:text-gold"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileSub(null);
                            }}
                          >
                            {child.label}
                          </HashLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
