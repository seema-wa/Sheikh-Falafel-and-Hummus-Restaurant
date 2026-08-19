import React from "react";
import { MessageCircle, Phone, Camera } from "lucide-react";

interface ContactAction {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  href: string;
  accent: string;
}

const ACTIONS: ContactAction[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "+966 50 368 4075",
    href: "https://wa.me/966503684075",
    accent: "#57642B",
  },
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "+966 12 343 6643",
    href: "tel:+966123436643",
    accent: "#9C3B2A",
  },
  {
    icon: Camera,
    title: "Instagram",
    subtitle: "@sheikh_falafel_jeddah",
    href: "https://www.instagram.com/sheikh_falafel_jeddah",
    accent: "#D79A2C",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FBF4E4] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-['Work_Sans',sans-serif] text-xs font-semibold uppercase tracking-[0.25em] text-[#9C3B2A]">
            Get In Touch
          </span>
          <h2 className="mt-4 font-['Fraunces',serif] text-4xl font-semibold text-[#1E1B16] sm:text-5xl">
            Reach Us Directly
          </h2>
          <p className="mt-3 font-['Work_Sans',sans-serif] text-base text-[#1E1B16]/60">
            No forms, no waiting &mdash; just tap and talk to us.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.title}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-[#1E1B16]/5 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-transform group-hover:scale-110"
                  style={{ backgroundColor: action.accent }}
                >
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-['Fraunces',serif] text-lg font-semibold text-[#1E1B16]">
                  {action.title}
                </h3>
                <p className="mt-1 font-['Work_Sans',sans-serif] text-sm text-[#1E1B16]/60" dir="ltr">
                  {action.subtitle}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
