function KhatimStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <path d="M50 0 L61 22 L85 15 L78 39 L100 50 L78 61 L85 85 L61 78 L50 100 L39 78 L15 85 L22 61 L0 50 L22 39 L15 15 L39 22 Z" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-[#FBF4E4] py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-[#57642B]/25 sm:-inset-5" />
          <img
            src="/images/about.png"
            alt="Inside Sheikh of Falafel and Hummus restaurant"
            className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -right-4 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#9C3B2A] text-[#FBF4E4] shadow-xl sm:h-28 sm:w-28">
            <span className="font-['Fraunces',serif] text-2xl font-semibold sm:text-3xl">2001</span>
            <span className="font-['Work_Sans',sans-serif] text-[10px] uppercase tracking-widest">
              est.
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-4 flex items-center gap-2 text-[#57642B]">
            <KhatimStar className="h-4 w-4" />
            <span className="font-['Work_Sans',sans-serif] text-xs font-semibold uppercase tracking-[0.25em]">
              Our Story
            </span>
          </div>

          <h2 className="font-['Fraunces',serif] text-4xl font-semibold leading-tight text-[#1E1B16] sm:text-5xl">
            Over two decades of the same honest recipe
          </h2>

          <div className="mt-6 space-y-4 font-['Work_Sans',sans-serif] text-base leading-relaxed text-[#1E1B16]/70">
            <p>
              Sheikh of Falafel and Hummus opened in 2001 on Nahdat Al Sharq
              Street in Al Salamah, Jeddah, with a simple idea: serve Levantine
              hummus and falafel the way our grandparents made it, without
              shortcuts.
            </p>
            <p>
              Every morning our chickpeas are soaked, boiled, and mashed by
              hand. Our falafel is mixed fresh and fried to order, never
              frozen, never pre-made. Generations of Jeddah families have
              grown up on our tahini &mdash; and we intend to keep it that way.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#1E1B16]/10 pt-8">
            <div>
              <p className="font-['Fraunces',serif] text-3xl font-semibold text-[#9C3B2A]">23+</p>
              <p className="mt-1 font-['Work_Sans',sans-serif] text-xs uppercase tracking-wide text-[#1E1B16]/60">
                Years serving Jeddah
              </p>
            </div>
            <div>
              <p className="font-['Fraunces',serif] text-3xl font-semibold text-[#9C3B2A]">100%</p>
              <p className="mt-1 font-['Work_Sans',sans-serif] text-xs uppercase tracking-wide text-[#1E1B16]/60">
                Made fresh daily
              </p>
            </div>
            <div>
              <p className="font-['Fraunces',serif] text-3xl font-semibold text-[#9C3B2A]">1</p>
              <p className="mt-1 font-['Work_Sans',sans-serif] text-xs uppercase tracking-wide text-[#1E1B16]/60">
                Family recipe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
