// Floating accessibility panel in the bottom-right corner.
// Lets users toggle theme, font size, motion, reading font, and read-aloud.
// Changes apply CSS classes to <html> so they cascade everywhere.

import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "contrast" | "soft";
type FontSize = 0 | 1 | 2 | 3;

const FONT_LABELS = ["Small", "Default", "Large", "Extra Large"];
const FONT_CLASSES = ["font-size-small", "", "font-size-large", "font-size-xlarge"];

const THEMES: { id: Theme; label: string; swatch: string }[] = [
  { id: "light", label: "Light", swatch: "bg-cream border-navy" },
  { id: "dark", label: "Dark", swatch: "bg-navy border-gold" },
  { id: "contrast", label: "High Contrast", swatch: "bg-navy-dark border-cream" },
  { id: "soft", label: "Soft Sepia", swatch: "bg-cream border-gold-dark" },
];

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>(1);
  const [theme, setTheme] = useState<Theme>("light");
  const [readableFont, setReadableFont] = useState(false);
  const [easyLayout, setEasyLayout] = useState(false);
  const [motionOff, setMotionOff] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Sync all settings to <html> classes whenever they change
  useEffect(() => {
    const root = document.documentElement;

    FONT_CLASSES.forEach((c) => c && root.classList.remove(c));
    if (FONT_CLASSES[fontSize]) root.classList.add(FONT_CLASSES[fontSize]);

    root.classList.remove("theme-dark", "theme-contrast", "theme-soft");
    if (theme !== "light") root.classList.add(`theme-${theme}`);

    root.classList.toggle("readable-font", readableFont);
    root.classList.toggle("easy-reading-layout", easyLayout);
    root.classList.toggle("motion-off", motionOff);
  }, [fontSize, theme, readableFont, easyLayout, motionOff]);

  // Read main content aloud using the Web Speech API
  function readPageAloud() {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const main = document.getElementById("main-content");
    if (!main) return;

    const utterance = new SpeechSynthesisUtterance(main.innerText);
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }

  return (
    <>
      <button
        data-acc-toolbar-trigger
        onClick={() => setIsOpen(!isOpen)}
        className="accessibility-toolbar fixed right-4 bottom-2 z-30 rounded-full bg-navy px-2 py-1.5 text-gold shadow-lg transition-transform hover:scale-105 focus-visible:scale-105"
        aria-label={isOpen ? "Close settings" : "Open settings"}
        aria-expanded={isOpen}
        aria-controls="display-settings-panel"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      {isOpen && (
        <div
          id="display-settings-panel"
          className="accessibility-toolbar fixed bottom-14 right-4 z-30 w-[20rem] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-navy-light bg-card p-5 shadow-2xl"
          role="dialog"
          aria-label="Display settings"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">Display Settings</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-muted-foreground hover:bg-muted"
              aria-label="Close"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <fieldset className="mb-5">
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Theme
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {THEMES.map((t) => (
                <button
                  data-acc-theme-option
                  data-acc-theme-option-id={t.id}
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-sm transition-all ${
                    theme === t.id
                      ? "border-gold bg-gold text-navy shadow-sm focus-visible:ring-2 focus-visible:ring-gold"
                      : "border-border bg-muted hover:border-gold/50"
                  }`}
                  aria-pressed={theme === t.id}
                >
                  <span className={`h-5 w-5 rounded-full border-2 ${t.swatch}`} aria-hidden="true" />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mb-5">
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Text Size
            </legend>
            <div className="grid grid-cols-4 gap-2">
              {FONT_LABELS.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setFontSize(i as FontSize)}
                  className={`rounded-xl border-2 py-2 transition-all ${
                    fontSize === i
                      ? "border-gold bg-gold text-navy shadow-sm focus-visible:ring-2 focus-visible:ring-gold"
                      : "border-border bg-muted hover:border-gold/50"
                  }`}
                  aria-pressed={fontSize === i}
                  aria-label={`Text size ${label}`}
                  title={label}
                >
                  <span className="font-bold" style={{ fontSize: `${0.65 + i * 0.18}rem` }} aria-hidden="true">
                    A
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Current: {FONT_LABELS[fontSize]}</p>
          </fieldset>

          <div className="space-y-2">
            <ToggleRow
              label="Reduce Motion"
              hint="Pauses background animations"
              checked={motionOff}
              onChange={() => setMotionOff(!motionOff)}
            />
            <ToggleRow
              label="Easy Reading Font"
              hint="Wider spacing, rounded letters"
              checked={readableFont}
              onChange={() => setReadableFont(!readableFont)}
            />
            <ToggleRow
              label="Easy Reading Layout"
              hint="Left-align all headings and text"
              checked={easyLayout}
              onChange={() => setEasyLayout(!easyLayout)}
            />
            <button
              onClick={readPageAloud}
              className={`flex w-full items-center justify-between rounded-xl border-2 px-3 py-2.5 text-sm font-medium transition-all ${
                isSpeaking
                  ? "border-gold bg-gold text-navy shadow-sm"
                  : "border-border bg-muted text-foreground hover:border-gold/50"
              }`}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true">{isSpeaking ? "⏹" : "🔊"}</span>
                {isSpeaking ? "Stop Reading" : "Read Page Aloud"}
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Reusable toggle switch for on/off accessibility settings
function ToggleRow({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5 text-left transition-colors hover:bg-muted"
      role="switch"
      aria-checked={checked}
    >
      <span>
        <span className="block text-sm font-medium text-foreground">{label}</span>
        <span className="block text-xs text-muted-foreground">{hint}</span>
      </span>
      <span
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-gold" : "bg-muted-foreground/30"
        }`}
        aria-hidden="true"
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-cream shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}