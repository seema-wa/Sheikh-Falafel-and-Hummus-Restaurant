import { MapPin, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="bg-[#1E1B16] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-14 max-w-xl">
          <span className="font-['Work_Sans',sans-serif] text-xs font-semibold uppercase tracking-[0.25em] text-[#D79A2C]">
            Visit Us
          </span>
          <h2 className="mt-4 font-['Fraunces',serif] text-4xl font-semibold text-[#FBF4E4] sm:text-5xl">
            Find Our Table
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl border border-[#FBF4E4]/10 lg:col-span-3">
            <iframe
              title="Sheikh of Falafel and Hummus location on Google Maps"
              src="https://www.google.com/maps?q=Al+Salamah+District,+Jeddah,+Saudi+Arabia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-3xl border border-[#FBF4E4]/10 bg-[#FBF4E4]/[0.03] p-8 lg:col-span-2">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D79A2C]/15 text-[#D79A2C]">
                <MapPin size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-['Fraunces',serif] text-lg font-semibold text-[#FBF4E4]">
                  Address
                </h3>
                <p className="mt-1 font-['Work_Sans',sans-serif] text-sm leading-relaxed text-[#FBF4E4]/65">
                  Nahdat Al Sharq Street, Al Salamah District,
                  <br />
                  Jeddah, Saudi Arabia
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D79A2C]/15 text-[#D79A2C]">
                <Clock size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-['Fraunces',serif] text-lg font-semibold text-[#FBF4E4]">
                  Open Daily
                </h3>
                <p className="mt-1 font-['Work_Sans',sans-serif] text-sm leading-relaxed text-[#FBF4E4]/65">
                  10:00 AM &ndash; 12:00 AM
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=Al+Salamah+District,+Jeddah,+Saudi+Arabia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#D79A2C] px-6 py-3 font-['Work_Sans',sans-serif] text-sm font-semibold text-[#1E1B16] transition-transform hover:scale-[1.02]"
            >
              <Navigation size={16} strokeWidth={2.5} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
