// Sticky navigation header with desktop dropdowns and mobile hamburger menu.
// Dropdowns use hover + focus states for mouse and keyboard users.
// Mobile nav uses expand/collapse for submenus.

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import inverseLogo from "../assets/Logos/Digital/Inverse/B&B_logo_RGB_inverse.svg";

type Child = {
  to: "/about" | "/services" | "/resources" | "/get-involved" | "/contact";
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
      { to: "/about", hash: "approach-to-disability", label: "Approach to Disability" },
      { to: "/about", hash: "values", label: "Our Values" },
      { to: "/about", hash: "goals", label: "Our Goals" },
      { to: "/about", hash: "meet-our-team", label: "Meet Our Team" },
      { to: "/about", hash: "meet-our-board", label: "Meet Our Board" },
      { to: "/about", hash: "disability-confident", label: "Accreditations" },
    ],
  },
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services", hash: "bubble-world", label: "Bubble World" },
      { to: "/services", hash: "offerings", label: "Our Services" },
      { to: "/services", hash: "support-groups", label: "Who We Support" },
    ],
  },
  {
    to: "/resources",
    label: "Resources",
    children: [
      { to: "/resources", hash: "downloads", label: "Free Downloads" },
      { to: "/resources", hash: "advocacy", label: "Advocacy Documents" },
      { to: "/resources", hash: "sensory-guides", label: "Sensory Guides for Events" },
      { to: "/resources", hash: "animations", label: "Downloadable Animations" },
      { to: "/resources", hash: "videos", label: "Videos & Impact" },
      { to: "/resources", hash: "news", label: "Bubble World News HQ" },
    ],
  },
  {
    to: "/get-involved",
    label: "Get Involved",
    children: [
      { to: "/get-involved", hash: "booking", label: "Book a Session" },
      { to: "/get-involved", hash: "events", label: "Events" },
      { to: "/get-involved", hash: "donate", label: "Donate" },
      { to: "/get-involved", hash: "volunteer", label: "Volunteer" },
      { to: "/get-involved", hash: "members", label: "Members" },
      { to: "/get-involved", hash: "professionals", label: "Professionals" },
    ],
  },
  {
    to: "/contact",
    label: "Contact",
    children: [
      { to: "/contact", hash: "contact-details", label: "Get In Touch" },
      { to: "/contact", hash: "feedback", label: "Feedback Form" },
    ],
  },
];

function ChevronIcon() {
  return (
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
  );
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {isOpen ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
}

function NavBubbleDecoration({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="27" cy="27" r="23" fill="#193054" stroke="#FEDD5A" strokeWidth="3" />
      <path
        d="M30 13C39 14 44.5 19.5 45.2 28"
        stroke="#FEDD5A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="44" cy="44" r="10" fill="#FEDD5A" stroke="#193054" strokeWidth="3" />
      <path
        d="M43.5 38.5C47.5 38.8 50 41.1 50.1 44.8"
        stroke="#193054"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const linkBase =
  "inline-flex items-center gap-1 rounded-lg px-2 py-2 text-base font-medium text-cream transition-colors hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none lg:px-3";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const location = useLocation();
  const current = location.pathname;

  return (
    <header className="sticky top-0 z-40 bg-navy shadow-lg" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Buttons & Bubbles — Home">
          <img src={inverseLogo} alt="" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.to === "/" ? current === "/" : current === link.to;
              const isOpen = openMenu === link.to;
              const hasChildren = !!link.children?.length;

              return (
                <li
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenMenu(link.to)}
                  onMouseLeave={() => hasChildren && setOpenMenu(null)}
                >
                  <Link
                    to={link.to}
                    className={`${linkBase} ${isActive ? "bg-navy-light text-gold" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    aria-haspopup={hasChildren || undefined}
                    aria-expanded={hasChildren ? isOpen : undefined}
                    onFocus={() => hasChildren && setOpenMenu(link.to)}
                  >
                    {link.label}
                    {hasChildren && <ChevronIcon />}
                  </Link>

                  {/* Dropdown submenu */}
                  {hasChildren && isOpen && (
                    <div
                      className={`absolute top-full pt-1 ${
                        link.to === "/contact" ? "right-0" : "left-0"
                      }`}
                    >
                      <ul
                        className="min-w-[14rem] rounded-3xl border-4 border-white bg-gold py-2 shadow-2xl animate-fade-in"
                        role="menu"
                      >
                        {link.children!.map((child) => (
                          <li key={`${child.to}#${child.hash}`} role="none">
                            <HashLink
                              to={`${child.to}#${child.hash}`}
                              role="menuitem"
                              smooth
                              className="block px-4 py-2 text-base text-navy transition-colors hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none"
                              onClick={() => setOpenMenu(null)}
                            >
                              {child.label}
                            </HashLink>
                          </li>
                        ))}
                      </ul>
                      <NavBubbleDecoration className="pointer-events-none absolute -bottom-10 right-1 z-10 h-14 w-14" />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 text-gold hover:bg-navy-light md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <HamburgerIcon isOpen={mobileOpen} />
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav
          className="relative border-t border-white bg-gold px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1 pb-14">
            {navLinks.map((link) => {
              const isActive = link.to === "/" ? current === "/" : current === link.to;
              const isOpen = mobileSub === link.to;
              const hasChildren = !!link.children?.length;

              return (
                <li key={link.to}>
                  <div className="flex items-center">
                    <Link
                      to={link.to}
                      className={`flex-1 rounded-lg px-3 py-2 text-base font-medium text-navy transition-colors hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none active:bg-navy-light active:text-gold ${
                        isActive ? "bg-cream text-navy" : ""
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        className="ml-1 rounded-lg p-2 text-navy hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none active:bg-navy-light active:text-gold"
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

                  {/* Mobile submenu items */}
                  {hasChildren && isOpen && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-navy/40 pl-3">
                      {link.children!.map((child) => (
                        <li key={`${child.to}#${child.hash}`}>
                          <HashLink
                            to={`${child.to}#${child.hash}`}
                            smooth
                            className="block rounded-lg px-3 py-2 text-base text-navy transition-colors hover:bg-navy-light hover:text-gold focus:bg-navy-light focus:text-gold focus:outline-none active:bg-navy-light active:text-gold"
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
          <NavBubbleDecoration className="pointer-events-none absolute bottom-2 right-5 z-10 h-14 w-14" />
        </nav>
      )}
    </header>
  );
}
