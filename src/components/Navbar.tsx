import { useEffect, useRef, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

/** Eight-point khatim star — the page's recurring signature mark. */
function KhatimStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <path d="M50 0 L61 22 L85 15 L78 39 L100 50 L78 61 L85 85 L61 78 L50 100 L39 78 L15 85 L22 61 L0 50 L22 39 L15 15 L39 22 Z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrolledPastTop = currentY > 120;
      const scrollingDown = currentY > lastScrollY.current;

      setHidden(scrolledPastTop && scrollingDown && !isOpen);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-transform duration-500 ease-out ${
        hidden ? "-translate-y-[180%]" : "translate-y-0"
      }`}
    >
      <nav
        className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-[#D79A2C]/25 bg-[#1E1B16]/90 px-5 py-3 shadow-2xl shadow-black/30 backdrop-blur-md"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-2.5 shrink-0" onClick={handleLinkClick}>
          <img
            src="/images/logo.png"
            alt="Sheikh of Falafel and Hummus logo"
            className="h-9 w-9 rounded-full object-cover ring-2 ring-[#D79A2C]/40"
          />
          <span className="hidden font-['Fraunces',serif] text-lg font-semibold text-[#FBF4E4] sm:block">
            Sheikh of Falafel &amp; Hummus
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-['Work_Sans',sans-serif] text-sm font-medium text-[#FBF4E4]/80 transition-colors hover:text-[#D79A2C]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/966503684075"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#57642B] px-4 py-2 text-sm font-semibold text-[#FBF4E4] transition-colors hover:bg-[#4a5524] lg:flex"
        >
          <MessageCircle size={16} strokeWidth={2.5} />
          Order
        </a>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#FBF4E4] lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-3xl border border-[#D79A2C]/25 bg-[#1E1B16]/95 p-5 shadow-2xl backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-xl px-3 py-2.5 font-['Work_Sans',sans-serif] text-sm font-medium text-[#FBF4E4]/85 transition-colors hover:bg-[#D79A2C]/10 hover:text-[#D79A2C]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/966503684075"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#57642B] px-4 py-2.5 text-sm font-semibold text-[#FBF4E4]"
            onClick={handleLinkClick}
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Order on WhatsApp
          </a>
        </div>
      )}

      <KhatimStar className="pointer-events-none absolute -right-2 -top-2 h-4 w-4 text-[#D79A2C]/60" />
    </header>
  );
}
