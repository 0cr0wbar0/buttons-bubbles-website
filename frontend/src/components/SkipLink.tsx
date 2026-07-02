// Hidden skip link that becomes visible on keyboard focus.
// Lets screen reader and keyboard users jump directly to the main content.
export function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}