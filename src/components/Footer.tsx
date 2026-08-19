import { MessageCircle, Phone, Camera } from "lucide-react";

function KhatimStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <path d="M50 0 L61 22 L85 15 L78 39 L100 50 L78 61 L85 85 L61 78 L50 100 L39 78 L15 85 L22 61 L0 50 L22 39 L15 15 L39 22 Z" />
    </svg>
  );
}

const SOCIALS = [
  { icon: MessageCircle, href: "https://wa.me/966503684075", label: "WhatsApp" },
  { icon: Phone, href: "tel:+966123436643", label: "Phone" },
  { icon: Camera, href: "https://www.instagram.com/sheikh_falafel_jeddah", label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1B16]">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-10">
        <KhatimStar className="mx-auto h-8 w-8 text-[#D79A2C]" />

        <h2 className="mx-auto mt-6 max-w-xl font-['Fraunces',serif] text-3xl font-semibold leading-snug text-[#FBF4E4] sm:text-4xl">
          From our kitchen in Al Salamah to your table &mdash; ahlan wa sahlan.
        </h2>
        <p className="mx-auto mt-4 max-w-md font-['Work_Sans',sans-serif] text-sm leading-relaxed text-[#FBF4E4]/60">
          Since 2001, one recipe, one street, one family. We can't wait to
          welcome you.
        </p>

        <div className="mt-9 flex items-center justify-center gap-4">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FBF4E4]/15 text-[#FBF4E4]/80 transition-colors hover:border-[#D79A2C]/60 hover:text-[#D79A2C]"
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-[#FBF4E4]/10 py-6">
        <p className="text-center font-['Work_Sans',sans-serif] text-xs text-[#FBF4E4]/40">
          &copy; {year} Sheikh of Falafel and Hummus &mdash; Nahdat Al Sharq
          Street, Al Salamah, Jeddah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
