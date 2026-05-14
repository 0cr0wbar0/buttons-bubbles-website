// Skip link — hidden by default, shows on keyboard focus so screen reader
// and keyboard users can jump straight to the main content.
// Sits right at the top of the page before anything else.

export function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}
