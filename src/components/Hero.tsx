import { ArrowDown, Star } from "lucide-react";

function KhatimStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <path d="M50 0 L61 22 L85 15 L78 39 L100 50 L78 61 L85 85 L61 78 L50 100 L39 78 L15 85 L22 61 L0 50 L22 39 L15 15 L39 22 Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#1E1B16]"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Signature hummus and falafel spread at Sheikh of Falafel and Hummus"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B16] via-[#1E1B16]/70 to-[#1E1B16]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B16]/80 via-transparent to-transparent" />
      </div>

      <KhatimStar className="pointer-events-none absolute right-8 top-24 hidden h-16 w-16 text-[#D79A2C]/25 sm:block md:h-24 md:w-24" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 sm:px-10 md:pt-20">
        <div className="mb-5 flex items-center gap-2 text-[#D79A2C]">
          <Star size={16} fill="currentColor" />
          <span className="font-['Work_Sans',sans-serif] text-xs font-semibold uppercase tracking-[0.25em]">
            Jeddah, since 2001
          </span>
        </div>

        <h1 className="max-w-3xl font-['Fraunces',serif] text-5xl font-semibold leading-[1.05] text-[#FBF4E4] sm:text-6xl md:text-7xl">
          Sheikh of Falafel
          <br />
          <span className="text-[#D79A2C]">&amp; Hummus</span>
        </h1>

        <p className="mt-6 max-w-lg font-['Work_Sans',sans-serif] text-base leading-relaxed text-[#FBF4E4]/75 sm:text-lg">
          Slow-mashed chickpeas, hand-fried falafel, and recipes that haven't
          changed since we opened our doors on Nahdat Al Sharq Street in 2001.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-[#D79A2C] px-8 py-3.5 font-['Work_Sans',sans-serif] text-sm font-semibold text-[#1E1B16] shadow-lg shadow-[#D79A2C]/20 transition-transform hover:scale-[1.03]"
          >
            View Our Menu
          </a>
          <a
            href="#location"
            className="rounded-full border border-[#FBF4E4]/30 px-8 py-3.5 font-['Work_Sans',sans-serif] text-sm font-semibold text-[#FBF4E4] transition-colors hover:border-[#FBF4E4]/70"
          >
            Find Us
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-[#FBF4E4]/60"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
